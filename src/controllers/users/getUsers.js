import User from '../../models/user.js';

const getUser = async (req, res) => {
  try {
    const result = await User.findAll();

    if (!result) {
      return res.status(404).json({ message: `Users not found` });
    }

    res.status(200).json({ succefull: true, result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default getUser;
