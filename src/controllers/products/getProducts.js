import Product from '../../models/product.js';

const getproducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    if (products.length === 0) {
      res.status(404).json({ message: 'Products is not found' });
    }
    res.status(200).json({ succefull: true, products });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default getproducts;
