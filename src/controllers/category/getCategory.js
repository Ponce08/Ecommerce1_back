import Category from '../../models/category.js';

const getCategory = async (req, res) => {
  try {
    const result = await Category.findAll();

    if (!result) {
      return res.status(404).json({ message: `Categorys not found` });
    }

    res.status(200).json({ succefull: true, result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default getCategory;
