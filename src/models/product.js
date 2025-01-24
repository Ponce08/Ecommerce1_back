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
    discountPercentage: {
      type: DataTypes.NUMERIC(5, 2),
      allowNull: true
    },
    rating: {
      type: DataTypes.NUMERIC(3, 2),
      allowNull: true
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    brand: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    sku: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    dimensions: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: { width: 0, height: 0, depth: 0 }
    },
    warrantyInformation: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    shippingInformation: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    availabilityStatus: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    reviews: {
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue: []
    },
    returnPolicy: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    minimumOrderQuantity: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    meta: {
      type: DataTypes.JSON,
      allowNull: false,
      defaultValue: {
        createdAt: null,
        updatedAt: null,
        barcode: '',
        qrCode: ''
      }
    },
    images: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true
    },
    thumbnail: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  },
  {
    timestamps: true
  }
);

export default Product;
