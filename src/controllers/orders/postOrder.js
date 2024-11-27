import Order from '../../models/order.js';

const postOrder = async (req, res) => {
  try {
    const result = await Order.create(req.body);

    if (!result) {
      return res.status(404).json({ message: 'Error creating Order' });
    }

    res.status(200).json({ succefull: true, result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default postOrder;
