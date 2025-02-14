import Order from '../../models/order.js';

const getOrderById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Order.findByPk(id);

    if (!result) {
      return res.status(404).json({ message: `Order with id:${id} not found` });
    }

    res.status(200).json({ succefull: true, result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default getOrderById;
