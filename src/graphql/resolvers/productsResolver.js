import { Op } from 'sequelize';
import Product from '../../models/product.js';

const productsResolver = {
  Query: {
    products: async (_, { page = 1, category }) => {
      try {
        const limit = 12; // Productos por página
        const offset = (page - 1) * limit; // Calcular desplazamiento

        const whereCondition = category ? { category: { [Op.iLike]: `%${category}%` } } : {}; // Condición de categoría si se proporciona

        return await Product.findAll({
          where: whereCondition,
          limit,
          offset
        });
      } catch (error) {
        console.error('Error fetching products:', error);
        throw new Error('Error fetching products');
      }
    }
  }
};
export default productsResolver;
