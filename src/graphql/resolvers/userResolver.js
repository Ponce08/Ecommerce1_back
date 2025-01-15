import User from '../../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
// import nodemailer from 'nodemailer';
// import { plantillaNodemailer } from '../../plantillaNodemailer.js';

const userResolver = {
  Mutation: {
    createUser: async (_, { input }) => {
      const { firstName, lastName, email, phoneNumber, address, password } = input;

      // Verifica si el usuario ya existe
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        throw new Error('A user with this email already exists');
      }

      // Hashea la contraseña antes de guardarla
      const hashedPassword = await bcrypt.hash(password, 10);

      try {
        const user = await User.create({
          firstName,
          lastName,
          email,
          phoneNumber,
          address,
          password: hashedPassword
        });

        // Devuelve el usuario creado (sin la contraseña)
        return {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          phoneNumber: user.phoneNumber,
          address: user.address
        };
      } catch (error) {
        throw new Error('Error creating user: ' + error.message);
      }
    },
    login: async (_, { email, password }) => {
      const user = await User.findOne({ where: { email } });
      if (!user) {
        throw new Error('User not found');
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        throw new Error('Wrong password');
      }

      // const transporter = nodemailer.createTransport({
      //   service: 'gmail',
      //   auth: {
      //     user: 'fashionYtecnology@gmail.com',
      //     pass: 'dajx lutz msbn uqma'
      //   }
      // });

      // transporter.sendMail({
      //   from: '<fashionYtecnology@gmail.com>',
      //   to: 'yonathanponce2019@gmail.com',
      //   subject: '!Welcome to F&T',
      //   html: plantillaNodemailer
      // });

      const token = jwt.sign(
        { userId: user.id },
        'secretkey', // Cambia esto por una clave secreta más segura
        { expiresIn: '1h' }
      );

      return {
        token,
        user: {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email
        }
      };
    }
  },
  Query: {
    users: async () => {
      return await User.findAll();
    }
  }
};

export default userResolver;
