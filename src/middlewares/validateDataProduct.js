import Joi from 'joi';

// Esquema de validación principal
const productSchema = Joi.object({
  title: Joi.string().min(3).required(),
  description: Joi.string().min(20).required(),
  category: Joi.string()
    .valid(
      'beauty',
      'fragrances',
      'furniture',
      'groceries',
      'home-decoration',
      'kitchen-accessories',
      'laptops',
      'mens-shirts',
      'mens-shoes',
      'mens-watches',
      'mobile-accessories',
      'motorcycle',
      'skin-care',
      'smartphones',
      'sports-accessories',
      'sunglasses',
      'tablets',
      'tops',
      'vehicle',
      'womens-bags',
      'womens-dres',
      'womens-jewellery',
      'womens-shoes',
      'womens-watches'
    )
    .required(),
  price: Joi.number().positive().required(),
  discountPercentage: Joi.number().min(0).max(100).optional(),
  rating: Joi.number().min(0).max(5).optional(),
  stock: Joi.number().integer().min(0).required(),
  tags: Joi.array().items(Joi.string()).optional(),
  brand: Joi.string().required(),
  sku: Joi.string().alphanum().required(),
  weight: Joi.number().positive().optional(),
  dimensions: Joi.object({
    width: Joi.number().positive().required(),
    height: Joi.number().positive().required(),
    depth: Joi.number().positive().required()
  }).required(),
  warrantyInformation: Joi.string().optional(),
  shippingInformation: Joi.string().optional(),
  availabilityStatus: Joi.string().valid('In Stock', 'Out of Stock', 'Low Stock').optional(),
  reviews: Joi.array()
    .items(
      Joi.object({
        rating: Joi.number().min(0).max(5).required(),
        comment: Joi.string().min(5).required(),
        date: Joi.date().iso().required(),
        reviewerName: Joi.string().required(),
        reviewerEmail: Joi.string().email().required()
      })
    )
    .optional(),
  returnPolicy: Joi.string().optional(),
  minimumOrderQuantity: Joi.number().integer().min(1).optional(),
  meta: Joi.object({
    createdAt: Joi.date().iso().required(),
    updatedAt: Joi.date().iso().required(),
    barcode: Joi.string().length(13).required(),
    qrCode: Joi.string().uri().optional()
  }).required(),
  images: Joi.array().items(Joi.string().uri()).required(),
  thumbnail: Joi.string().uri().required()
});

// Middleware de validación
const validateProduct = (req, res, next) => {
  const { error } = productSchema.validate(req.body, { abortEarly: false });
  //     { abortEarly: false }:
  // Es una opción de configuración para el método validate.
  // abortEarly: false indica que Joi debe verificar todas las reglas del esquema y reportar todos los errores encontrados, en lugar de detenerse en el primer error.
  // Esto es útil para devolver al usuario una lista completa de problemas con los datos en lugar de uno a la vez

  if (error) {
    return res.status(400).json({
      error: error.details.map((detail) => detail.message).join(', ')
    });
  }

  next();
};

export default validateProduct;
