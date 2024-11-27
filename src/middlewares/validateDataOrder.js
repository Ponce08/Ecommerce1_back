import Joi from 'joi';

const ordeSchema = Joi.object({
  status: Joi.string()
    .valid('Pending', 'Confirmed', 'Processing', 'On Hold', 'Completed', 'Cancelled', 'Failed', 'Refunded')
    .required()
    .messages({
      'string.empty': 'El estado es obligatorio.',
      'any.only':
        'El estado debe ser "Pending" o "Confirmed" o "Processing" o "On Hold" o "Completed" o "Cancelled" o "Failed" o "Refunded".'
    }),
  totalPrice: Joi.number().greater(0).required().messages({
    'number.base': 'El precio total debe ser un número.',
    'number.greater': 'El precio total debe ser mayor a 0.'
  })
});

const validateDataOrder = (req, res, next) => {
  const { status, totalPrice } = req.body;

  const { error } = ordeSchema.validate({ status, totalPrice }, { abortEarly: false });

  if (error) {
    return res.status(400).json({
      message: 'Error de validación',
      details: error.details.map((err) => err.message)
    });
  }

  next();
};

export default validateDataOrder;
