import OrderItem from '../../models/order_item.js';

const postOrderItem = async (req, res) => {
  try {
    const result = await OrderItem.create(req.body);

    if (!result) {
      return res.status(404).json({ message: 'Error creating OrderItem' });
    }

    res.status(200).json({ succefull: true, result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default postOrderItem;
