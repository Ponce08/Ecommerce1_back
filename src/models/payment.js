import { DataTypes } from 'sequelize';
import sequelize from '../database.js';

const Payment = sequelize.define(
  'payment',
  {
    paymentMethod: {
      type: DataTypes.ENUM('credit_card', 'paypal', 'cash_on_delivery', 'cryptocurrency'),
      allowNull: true
    },
    amount: {
      type: DataTypes.NUMERIC(10, 2),
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM(
        'Pending',
        'Processing',
        'Failed',
        'Completed',
        'Refunded',
        'Partially Refunded',
        'Disputed',
        'Chargeback'
      ),
      allowNull: true
    }
  },
  {
    timestamps: true
  }
);

export default Payment;
