import Product from '../../models/product.js';

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body; // Obtiene las propiedades a actualizar

    // Busca el producto por su id
    const existingProduct = await Product.findByPk(id);

    if (!existingProduct) {
      return res.status(404).json({ message: `Product with id:${id} not found` });
    }

    // Filtra solo las propiedades que existen en el modelo
    const allowedUpdates = Object.keys(Product.getAttributes);
    // En este caso, getAttributes es una propiedad proporcionada por Sequelize que contiene la definición de todos los atributos (propiedades) de un modelo.
    // Cuando usamos Object.keys(product.getAttributes), obtenemos un array de nombres de las propiedades del modelo, por ejemplo:
    // ['name', 'price', 'stock', 'description', 'id', 'createdAt', 'updatedAt']

    const filteredUpdates = Object.keys(updates)
      .filter((key) => allowedUpdates.includes(key))
      .reduce((obj, key) => {
        obj[key] = updates[key];
        return obj;
      }, {});

    // Realiza la actualización
    const updatedProduct = await existingProduct.update(filteredUpdates);

    res.status(200).json({ success: true, product: updatedProduct });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default updateProduct;
