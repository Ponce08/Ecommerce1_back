import Product from '../../models/product.js';

const postProduct = async (req, res) => {
  try {
    const result = await Product.create(req.body);

    if (!result) {
      return res.status(404).json({ message: 'Error creating product' });
    }
    // for (let i = 0; i < API.products.length; i++) {
    //   await Product.create(API.products[i])
    // }

    res.status(200).json({ succefull: true, result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default postProduct;
