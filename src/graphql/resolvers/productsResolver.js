import { Op } from 'sequelize';
import Product from '../../models/product.js';

const productsResolver = {
  Query: {
    products: async (_, { page = 1, category, priceMin, priceMax, ratingOrder }) => {
      try {
        const limit = 12; // Productos por página
        const offset = (page - 1) * limit; // Calcular desplazamiento

        // Construir la condición WHERE dinámicamente
        const whereCondition = {};
        if (category) {
          whereCondition.category = { [Op.eq]: category };
        }
        if (priceMin) {
          whereCondition.price = { ...whereCondition.price, [Op.gte]: priceMin }; // Precio mínimo
        }
        if (priceMax) {
          whereCondition.price = { ...whereCondition.price, [Op.lte]: priceMax }; // Precio máximo
        }

        // Construir la condición ORDER BY dinámicamente
        const order = [];
        if (priceMin || priceMax) {
          order.push(['price', 'ASC']);
        } else if (ratingOrder === 'upward') {
          order.push(['rating', 'ASC']); // Ordenar por rating ascendente
        } else if (ratingOrder === 'falling') {
          order.push(['rating', 'DESC']); // Ordenar por rating descendente
        }

        // Realizar la consulta
        return await Product.findAll({
          where: whereCondition,
          limit,
          offset,
          order
        });
      } catch (error) {
        console.error('Error fetching products:', error);
        throw new Error('Error fetching products');
      }
    },
    getProductById: async (_, { id }) => {
      try {
        const result = await Product.findByPk(id);

        if (!result) return { message: `Product with id: ${id} not found` };
        return result;
      } catch (error) {
        console.error('Error fetching product:', error);
        throw new Error('Error fetching product');
      }
    }
  }
};

export default productsResolver;
