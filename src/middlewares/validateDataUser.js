import Joi from 'joi';

const userSchema = Joi.object({
  name: Joi.string().min(3).max(30).required().messages({
    'string.empty': 'El nombre es obligatorio.',
    'string.min': 'El nombre debe tener al menos 3 caracteres.',
    'string.max': 'El nombre no puede exceder los 30 caracteres.'
  }),
  email: Joi.string().email().required().messages({
    'string.empty': 'El correo electrónico es obligatorio.',
    'string.email': 'El correo electrónico debe ser válido.'
  }),
  password: Joi.string().min(8).required().messages({
    'string.empty': 'La contraseña es obligatoria.',
    'string.min': 'La contraseña debe tener al menos 8 caracteres.'
  }),
  address: Joi.string().min(5).max(100).optional().messages({
    'string.min': 'La dirección debe tener al menos 5 caracteres.',
    'string.max': 'La dirección no puede exceder los 100 caracteres.'
  }),
  phone: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .optional()
    .messages({
      'string.pattern.base': 'El teléfono debe tener 10 dígitos numéricos.'
    })
});

const validateDataUser = async (req, res, next) => {
  const { name, email, password, address, phone } = req.body;

  // Validar usando el esquema de Joi
  const { error } = userSchema.validate({ name, email, password, address, phone }, { abortEarly: false });

  if (error) {
    // Retornar errores en caso de validación fallida
    return res.status(400).json({
      message: 'Error de validación',
      details: error.details.map((err) => err.message)
    });
  }

  next();
};

export default validateDataUser;
