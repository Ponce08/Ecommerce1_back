import { Router } from 'express';
import getproducts from '../controllers/products/getProducts.js';
import postProduct from '../controllers/products/postProduct.js';
import validateProduct from '../middlewares/validateDataProduct.js';
import getProductById from '../controllers/products/getProductById.js';
import updateProduct from '../controllers/products/updateProduct.js';
import deleteProduct from '../controllers/products/deleteProduct.js';

const productRoute = Router();

productRoute.get('/', getproducts);
productRoute.get('/:id', getProductById);
productRoute.post('/post', validateProduct, postProduct);
productRoute.put('/:id', updateProduct);
productRoute.delete('/:id', deleteProduct);

export default productRoute;
