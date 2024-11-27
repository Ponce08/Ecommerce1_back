import OrderItem from '../../models/order_item.js';

const getOrderItemById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await OrderItem.findByPk(id);

    if (!result) {
      return res.status(404).json({ message: `OrderItem with id:${id} not found` });
    }

    res.status(200).json({ succefull: true, result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default getOrderItemById;
