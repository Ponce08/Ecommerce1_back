import { Router } from 'express';
import getOrder from '../controllers/orders/getOrders.js';
import getOrderById from '../controllers/orders/getOrderById.js';
import validateDataOrder from '../middlewares/validateDataOrder.js';
import postOrder from '../controllers/orders/postOrder.js';
import updateOrder from '../controllers/orders/updateOrder.js';
import deleteOrder from '../controllers/orders/deleteOrder.js';

const orderRoute = Router();

orderRoute.get('/', getOrder);
orderRoute.get('/:id', getOrderById);
orderRoute.post('/', validateDataOrder, postOrder);
orderRoute.put('/:id', updateOrder);
orderRoute.delete('/:id', deleteOrder);

export default orderRoute;
