import joi from 'joi';

const orderItemSchema = joi.object({
    quantity: joi.number().integer().min(1).required(),
    price: joi.number().precision(2).positive().required(),
});

const validateDataOrderItem = (req, res, next) => {
    const { error } = orderItemSchema.validate(req.body);
    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }
    next();
};

export default validateDataOrderItem;
