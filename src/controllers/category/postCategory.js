import Category from '../../models/category.js';

const postCategory = async (req, res) => {
  try {
    const result = await Category.create(req.body);

    if (!result) {
      return res.status(404).json({ message: 'Error creating Category' });
    }

    res.status(200).json({ succefull: true, result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default postCategory;
