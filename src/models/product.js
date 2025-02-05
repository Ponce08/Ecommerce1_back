import { DataTypes } from 'sequelize';
import sequelize from '../database.js';

const Product = sequelize.define(
  'product',
  {
    title: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    category: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    price: {
      type: DataTypes.NUMERIC(10, 2),
      allowNull: true
    },
    rating: {
      type: DataTypes.NUMERIC(3, 2),
      allowNull: false
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    brand: {
      type: DataTypes.STRING(255),
    },
    reviews: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: []
    },
    images: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true
    }
  },
  {
    timestamps: true
  }
);

export default Product;
