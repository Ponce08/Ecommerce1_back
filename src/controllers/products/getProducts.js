import Product from '../../models/product.js';
// import API from '../../../Api_Ecomm_Proyect1.json' assert { type: 'json' };

const getproducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    if (products.length === 0) {
      res.status(404).json({ message: 'Products is not found' });
    }
    res.status(200).json({ succefull: true, products });

    // let obj = {};
    // for (let i = 0; i < API.products.length; i++) {
    //   if (obj[API.products[i].category]) {
    //     obj[API.products[i].category] = obj[API.products[i].category] + 1;
    //   } else {
    //     obj[API.products[i].category] = 1;
    //   }
    // }
    // let k = 0;
    // for (const key in obj) {
    //   k = k + obj[key];
    // }
    // obj.total = k;
    // res.json({ data: obj });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default getproducts;
