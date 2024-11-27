import Payment from '../../models/payment.js';

const getPayment = async (req, res) => {
  try {
    const result = await Payment.findAll();

    if (!result) {
      return res.status(404).json({ message: `Payments not found` });
    }

    res.status(200).json({ succefull: true, result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default getPayment;
