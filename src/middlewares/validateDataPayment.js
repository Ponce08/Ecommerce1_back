import joi from 'joi';

const paymentSchema = joi.object({
  paymentMethod: joi.string().valid('credit_card', 'paypal', 'cash_on_delivery', 'cryptocurrency').required(),
  status: joi.string()
    .valid('Pending', 'Processing', 'Failed', 'Completed', 'Refunded', 'Partially Refunded', 'Disputed', 'Chargeback')
    .required(),
  amount: joi.number().positive().precision(2).required()
});

const validateDataPayment = (req, res, next) => {
  const { error } = paymentSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

export default validateDataPayment;
