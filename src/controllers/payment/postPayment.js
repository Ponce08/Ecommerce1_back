import Payment from '../../models/payment.js';

const postPayment = async (req, res) => {
  try {
    const result = await Payment.create(req.body);

    if (!result) {
      return res.status(404).json({ message: 'Error creating Payment' });
    }

    res.status(200).json({ succefull: true, result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default postPayment;
