import Shipping from '../../models/shipping.js';

const getShipping = async (req, res) => {
  try {
    const result = await Shipping.findAll();

    if (!result) {
      return res.status(404).json({ message: `Shippings not found` });
    }

    res.status(200).json({ succefull: true, result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default getShipping;
