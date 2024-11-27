import Shipping from '../../models/shipping.js';

const updateShipping = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body; // Obtiene las propiedades a actualizar

    // Busca el user por su id
    const existingShipping = await Shipping.findByPk(id);

    if (!existingShipping) {
      return res.status(404).json({ message: `Shipping with id:${id} not found` });
    }

    // Filtra solo las propiedades que existen en el modelo
    const allowedUpdates = Object.keys(Shipping.getAttributes);

    const filteredUpdates = Object.keys(updates)
      .filter((key) => allowedUpdates.includes(key))
      .reduce((obj, key) => {
        obj[key] = updates[key];
        return obj;
      }, {});

    // Realiza la actualización
    const updatedShipping = await existingShipping.update(filteredUpdates);

    res.status(200).json({ success: true, shipping: updatedShipping });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default updateShipping;
