import OrderItem from '../../models/order_item.js';

const updateOrderItem = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body; // Obtiene las propiedades a actualizar

    // Busca el user por su id
    const existingOrderItem = await OrderItem.findByPk(id);

    if (!existingOrderItem) {
      return res.status(404).json({ message: `OrderItem with id:${id} not found` });
    }

    // Filtra solo las propiedades que existen en el modelo
    const allowedUpdates = Object.keys(OrderItem.getAttributes);

    const filteredUpdates = Object.keys(updates)
      .filter((key) => allowedUpdates.includes(key))
      .reduce((obj, key) => {
        obj[key] = updates[key];
        return obj;
      }, {});

    // Realiza la actualización
    const updatedOrderItem = await existingOrderItem.update(filteredUpdates);

    res.status(200).json({ success: true, orderItem: updatedOrderItem });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default updateOrderItem;
