import express from 'express';
import cors from 'cors';
import productRoute from './routes/productsRoute.js';
import userRoute from './routes/userRoute.js';
import categoryRoute from './routes/categoryRoute.js';
import orderItemRoute from './routes/order_itemRoute.js';
import paymentRoute from './routes/paymentRoute.js';
import shippingRoute from './routes/shippingRoute.js';

const app = express();

app.use(
  cors({
    origin: 'https://ecommerce1-front.vercel.app', // Dominio permitido
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos HTTP permitidos
    allowedHeaders: ['Content-Type', 'Authorization'] // Encabezados permitidos
  })
);
app.use(express.json());

app.use('/products', productRoute);
app.use('/category', categoryRoute);
app.use('/orderItem', orderItemRoute);
app.use('/payment', paymentRoute);
app.use('/shipping', shippingRoute);
app.use('/user', userRoute);

export default app;
