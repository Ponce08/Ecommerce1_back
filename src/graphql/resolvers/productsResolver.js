import Product from '../../models/product.js';

const productsResolver = {
  Query: {
    products: async (_, { page = 1 }) => {
      try {
        const limit = 12; // Productos por página
        const offset = (page - 1) * limit; // Calcular desplazamiento

        return await Product.findAll({
          attributes: ['id', 'title', 'images'], // Selección específica de campos
          limit,
          offset,
          order: [['id', 'ASC']] // Opcional: Ordenar por id ascendente
        });
      } catch (error) {
        console.error('Error fetching products:', error);
        throw new Error('Error fetching products');
      }
    }
  }
};
export default productsResolver;
