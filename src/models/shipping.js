import { DataTypes } from 'sequelize';
import sequelize from '../database.js';

const Shipping = sequelize.define(
  'shipping',
  {
    shippingMethod: {
      type: DataTypes.ENUM('standard', 'express', 'pickup_store', 'international'),
      allowNull: true
    },
    trackingNumber: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM(
        'Not Required',
        'Pending',
        'Ready for Pickup',
        'Shipped',
        'In Transit',
        'Out for Delivery',
        'Delivered',
        'Returned',
        'Lost',
        'Damaged'
      ),
      allowNull: true
    }
  },
  {
    timestamps: true
  }
);

export default Shipping;
