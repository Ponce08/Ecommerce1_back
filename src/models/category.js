import { DataTypes } from 'sequelize';
import sequelize from '../database.js';

const Category = sequelize.define(
  'category',
  {
    name: {
      type: DataTypes.ENUM(
        'beauty',
        'fragrances',
        'furniture',
        'groceries',
        'home-decoration',
        'kitchen-accessories',
        'laptops',
        'mens-shirts',
        'mens-shoes',
        'mens-watches',
        'mobile-accessories',
        'motorcycle',
        'skin-care',
        'smartphones',
        'sports-accessories',
        'sunglasses',
        'tablets',
        'tops',
        'vehicle',
        'womens-bags',
        'womens-dresses',
        'womens-jewellery',
        'womens-shoes',
        'womens-watches'
      ),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  },
  {
    timestamps: true
  }
);

export default Category;
