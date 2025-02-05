import Product from '../../models/product.js';
import API from '../../../API_New.json' assert { type: 'json' };
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: 'dm7llqul3',
  api_key: '248591629323477',
  api_secret: 'WTgofDsCcK0GM6uBdzXb6AmX2-c'
});

const getproducts = async (req, res) => {
  try {
    // const products = await Product.findAll();
    // if (products.length === 0) {
    //   res.status(404).json({ message: 'Products is not found' });
    // }

    for (let i = 0; i < API.products.length; i++) {
      await Product.create({
        ...API.products[i]
      });
    }

    res.status(200).json({ succefull: true });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default getproducts;
