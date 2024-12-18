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
          whereCondition.category = { [Op.iLike]: `%${category}%` };
        }
        if (priceMin !== undefined) {
          whereCondition.price = { ...whereCondition.price, [Op.gte]: priceMin }; // Precio mínimo
        }
        if (priceMax !== undefined) {
          whereCondition.price = { ...whereCondition.price, [Op.lte]: priceMax }; // Precio máximo
        }

        // Construir la condición ORDER BY dinámicamente
        const order = [];
        if (ratingOrder === 'asc') {
          order.push(['rating', 'ASC']); // Ordenar por rating ascendente
        } else if (ratingOrder === 'desc') {
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
    }
  }
};

export default productsResolver;
