import User from '../../models/user.js';

const postUser = async (req, res) => {
  try {
    const result = await User.create(req.body);

    if (!result) {
      return res.status(404).json({ message: 'Error creating User' });
    }

    res.status(200).json({ succefull: true, result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default postUser;
