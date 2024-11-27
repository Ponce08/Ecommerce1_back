import joi from 'joi';

const shippingSchema = joi.object({
  shippingMethod: joi.string().valid('standard', 'express', 'overnight').required(),
  trackingNumber: joi.string().required(),
  status: joi.string().valid('pending', 'shipped', 'delivered', 'cancelled').required()
});

const validateDataShipping = (req, res, next) => {
  const { error } = shippingSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

export default validateDataShipping;
