import Shipping from '../../models/shipping.js';

const getShippingById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Shipping.findByPk(id);

    if (!result) {
      return res.status(404).json({ message: `Shipping with id:${id} not found` });
    }

    res.status(200).json({ succefull: true, result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default getShippingById;
