import Order from '../../models/order.js';

const getOrder = async (req, res) => {
  try {
    const result = await Order.findAll();

    if (!result) {
      return res.status(404).json({ message: `Orders not found` });
    }

    res.status(200).json({ succefull: true, result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default getOrder;
