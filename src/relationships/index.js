import sequelize from '../database.js';

import User from '../models/user.js';
import Product from '../models/product.js';
import Order from '../models/Order.js';
import OrderItem from '../models/order_item.js';
import Payment from '../models/payment.js';
import Shipping from '../models/shipping.js';
import Category from '../models/category.js';

sequelize.models.User = User;
sequelize.models.Product = Product;
sequelize.models.Order = Order;
sequelize.models.OrderItem = OrderItem;
sequelize.models.Shipping = Shipping;
sequelize.models.Payment = Payment;
sequelize.models.Category = Category;

// Relación uno a muchos: Un usuario tiene muchos pedidos.
User.hasMany(Order, {
  foreignKey: 'userId', // clave foránea en el modelo Order
  as: 'orders' // Alias para las órdenes del usuario
});

// Relación inversa: Un pedido pertenece a un usuario.
Order.belongsTo(User, {
  foreignKey: 'userId',
  as: 'user' // Alias para el usuario de la orden
});

// Relación uno a muchos: Un pedido tiene muchos elementos.
Order.hasMany(OrderItem, {
  foreignKey: 'orderId', // clave foránea en OrderItem
  as: 'items' // Alias para los elementos de la orden
});

// Relación inversa: Un elemento pertenece a un pedido.
OrderItem.belongsTo(Order, {
  foreignKey: 'orderId', // clave foránea en OrderItem
  as: 'order' // Alias para el pedido del elemento
});

// Relación de muchos a uno: Muchos OrderItems están relacionados con un único Product
OrderItem.belongsTo(Product, {
  foreignKey: 'productId', // Clave foránea en OrderItem
  as: 'product' // Alias para acceder al producto relacionado
});

// Relación inversa: Un Product puede tener muchos OrderItems
Product.hasMany(OrderItem, {
  foreignKey: 'productId', // Clave foránea en OrderItem
  as: 'orderItems' // Alias para acceder a los elementos del pedido
});

// Relación uno a muchos: Una categoría tiene muchos productos.
Category.hasMany(Product, {
  foreignKey: 'categoryId', // Clave foránea en Product
  as: 'products' // Alias para los productos relacionados
});

// Relación inversa: Un producto pertenece a una categoría.
Product.belongsTo(Category, {
  foreignKey: 'categoryId', // Clave foránea en Product
  as: 'categoryRelation' // Alias para la categoría relacionada
});

// Relación uno a uno: Una orden tiene un único pago
Order.hasOne(Payment, {
  foreignKey: 'orderId', // Clave foránea en Payment
  as: 'payment' // Alias para acceder al pago relacionado
});

// Relación inversa: Un pago pertenece a una única orden
Payment.belongsTo(Order, {
  foreignKey: 'orderId', // Clave foránea en Payment
  as: 'order' // Alias para acceder a la orden relacionada
});

// Relación uno a uno: Una orden tiene un único registro de envío.
Order.hasOne(Shipping, {
  foreignKey: 'orderId', // Clave foránea en Shipping
  as: 'shipping' // Alias para el envío relacionado
});

// Relación inversa: Un registro de envío pertenece a una orden.
Shipping.belongsTo(Order, {
  foreignKey: 'orderId', // Clave foránea en Shipping
  as: 'order' // Alias para la orden relacionada
});

// const sequelizeRelations = {
//   ...sequelize.models,
//   conn: sequelize
// };

export default sequelize.models;
