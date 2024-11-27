import Shipping from '../../models/shipping.js';

const postShipping = async (req, res) => {
  try {
    const result = await Shipping.create(req.body);

    if (!result) {
      return res.status(404).json({ message: 'Error creating Shipping' });
    }

    res.status(200).json({ succefull: true, result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default postShipping;
