import Category from '../../models/category.js';

const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body; // Obtiene las propiedades a actualizar

    // Busca el user por su id
    const existingCategory = await Category.findByPk(id);

    if (!existingCategory) {
      return res.status(404).json({ message: `Category with id:${id} not found` });
    }

    // Filtra solo las propiedades que existen en el modelo
    const allowedUpdates = Object.keys(Category.getAttributes);

    const filteredUpdates = Object.keys(updates)
      .filter((key) => allowedUpdates.includes(key))
      .reduce((obj, key) => {
        obj[key] = updates[key];
        return obj;
      }, {});

    // Realiza la actualización
    const updatedCategory = await existingCategory.update(filteredUpdates);

    res.status(200).json({ success: true, category: updatedCategory });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default updateCategory;
