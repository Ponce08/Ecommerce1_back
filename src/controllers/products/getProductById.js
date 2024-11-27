import Product from '../../models/product.js';

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Product.findByPk(id);

    if (!result) {
      return res.status(404).json({ message: `Product with id:${id} not found` });
    }

    res.status(200).json({ succefull: true, result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default getProductById;
