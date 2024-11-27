import Payment from '../../models/payment.js';

const updatePayment = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body; // Obtiene las propiedades a actualizar

    // Busca el user por su id
    const existingPayment = await Payment.findByPk(id);

    if (!existingPayment) {
      return res.status(404).json({ message: `Payment with id:${id} not found` });
    }

    // Filtra solo las propiedades que existen en el modelo
    const allowedUpdates = Object.keys(Payment.getAttributes);

    const filteredUpdates = Object.keys(updates)
      .filter((key) => allowedUpdates.includes(key))
      .reduce((obj, key) => {
        obj[key] = updates[key];
        return obj;
      }, {});

    // Realiza la actualización
    const updatedPayment = await existingPayment.update(filteredUpdates);

    res.status(200).json({ success: true, payment: updatedPayment });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default updatePayment;
