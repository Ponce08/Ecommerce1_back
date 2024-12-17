import Product from '../../models/product.js';

const categoryResolver = {
  Query: {
    products: async (_, { page = 1, category }) => {
      try {
        const limit = 12; // Productos por página
        const offset = (page - 1) * limit; // Calcular desplazamiento

        const whereCondition = category ? { category } : {}; // Condición de categoría si se proporciona

        return await Product.findAll({
          where: whereCondition, // Agregar filtro por categoría
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

export default categoryResolver;
