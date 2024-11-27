import Payment from '../../models/payment.js';

const deletePayment = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Payment.destroy(id);

    if (!result) {
      return res.status(404).json({ message: `Payment with id:${id} not found` });
    }

    res.status(200).json({ succefull: true, result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default deletePayment;
