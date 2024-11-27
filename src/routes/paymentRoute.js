import { Router } from 'express';
import postPayment from '../controllers/payment/postPayment.js';
import validateDataPayment from '../middlewares/validateDataPayment.js';
import getPayment from '../controllers/payment/getPayments.js';
import getPaymentById from '../controllers/payment/getPaymentById.js';
import deletePayment from '../controllers/payment/deletePayment.js';
import updatePayment from '../controllers/payment/updatePayment.js';

const paymentRoute = Router();

paymentRoute.get('/', getPayment);
paymentRoute.get('/:id', getPaymentById);
paymentRoute.post('/', validateDataPayment, postPayment);
paymentRoute.put('/:id', updatePayment);
paymentRoute.delete('/:id', deletePayment);

export default paymentRoute;
