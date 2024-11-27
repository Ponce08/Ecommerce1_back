import { DataTypes } from 'sequelize';
import sequelize from '../database.js';

const Order = sequelize.define(
  'order',
  {
    status: {
      type: DataTypes.ENUM('Pending', 'Confirmed', 'Processing', 'On Hold', 'Completed', 'Cancelled', 'Failed', 'Refunded'),
      allowNull: true
    },
    totalPrice: {
      type: DataTypes.NUMERIC(10, 2),
      allowNull: true
    }
  },
  {
    timestamps: true
  }
);

export default Order;
