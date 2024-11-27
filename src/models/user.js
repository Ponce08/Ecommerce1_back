import { DataTypes } from 'sequelize';
import sequelize from '../database.js';

const User = sequelize.define(
  'user',
  {
    name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    phone: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  },
  {
    timestamps: true
  }
);

export default User;
