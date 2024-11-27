import Order from '../../models/order.js';

const updateOrder = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body; // Obtiene las propiedades a actualizar

    // Busca el user por su id
    const existingOrder = await Order.findByPk(id);

    if (!existingOrder) {
      return res.status(404).json({ message: `Order with id:${id} not found` });
    }

    // Filtra solo las propiedades que existen en el modelo
    const allowedUpdates = Object.keys(Order.getAttributes);

    const filteredUpdates = Object.keys(updates)
      .filter((key) => allowedUpdates.includes(key))
      .reduce((obj, key) => {
        obj[key] = updates[key];
        return obj;
      }, {});

    // Realiza la actualización
    const updatedOrder = await existingOrder.update(filteredUpdates);

    res.status(200).json({ success: true, order: updatedOrder });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default updateOrder;
