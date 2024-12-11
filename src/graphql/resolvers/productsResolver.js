import Product from '../../models/product.js';

const productsResolver = {
  Query: {
    products: async () => {
      try {
        return await Product.findAll({
          attributes: ['id', 'title', 'images'],
          limit: 12
        });
      } catch (error) {
        console.error('Error fetching products:', error);
        throw new Error('Error fetching products');
      }
    }
  }
};

export default productsResolver;
