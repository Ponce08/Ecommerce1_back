import Category from '../../models/category.js';

const getCategoryById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Category.findByPk(id);

    if (!result) {
      return res.status(404).json({ message: `Category with id:${id} not found` });
    }

    res.status(200).json({ succefull: true, result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default getCategoryById;
