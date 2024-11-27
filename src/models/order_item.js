import { DataTypes } from 'sequelize';
import sequelize from '../database.js';

const OrderItem = sequelize.define(
  'order_item',
  {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    price: {
      type: DataTypes.NUMERIC(10, 2),
      allowNull: true
    }
  },
  {
    timestamps: true
  }
);

export default OrderItem;
