import { Router } from 'express';
import postShipping from '../controllers/shipping/postShipping.js';
import validateDataShipping from '../middlewares/validateDataShipping.js';
import getShipping from '../controllers/shipping/getShipping.js';
import getShippingById from '../controllers/shipping/getShippingById.js';
import deleteShipping from '../controllers/shipping/deleteShipping.js';
import updateShipping from '../controllers/shipping/updateShipping.js';

const shippingRoute = Router();

shippingRoute.get('/', getShipping);
shippingRoute.get('/:id', getShippingById);
shippingRoute.post('/', validateDataShipping, postShipping);
shippingRoute.put('/:id', updateShipping);
shippingRoute.delete('/:id', deleteShipping);

export default shippingRoute;
