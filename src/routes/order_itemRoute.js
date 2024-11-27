import { Router } from 'express';
import postOrderItem from '../controllers/orderItem/postOrderItem.js';
import validateDataOrderItem from '../middlewares/validateDataOrderItem.js';
import getOrederItems from '../controllers/orderItem/getOrederItems.js';
import getOrderItemById from '../controllers/orderItem/getOrderItemById.js';
import deleteOrderItem from '../controllers/orderItem/deleteOrderItem.js';
import updateOrderItem from '../controllers/orderItem/updateOrderItem.js';

const orderItemRoute = Router();

orderItemRoute.get('/', getOrederItems);
orderItemRoute.get('/:id', getOrderItemById);
orderItemRoute.post('/', validateDataOrderItem, postOrderItem);
orderItemRoute.put('/:id', updateOrderItem);
orderItemRoute.delete('/:id', deleteOrderItem);

export default orderItemRoute;
