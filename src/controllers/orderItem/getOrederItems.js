import OrderItem from '../../models/order_item.js';

const getOrderItem = async (req, res) => {
  try {
    const result = await OrderItem.findAll();

    if (!result) {
      return res.status(404).json({ message: `OrderItems not found` });
    }

    res.status(200).json({ succefull: true, result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default getOrderItem;
