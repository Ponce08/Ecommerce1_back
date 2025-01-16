import express from 'express';
import cors from 'cors';
import productRoute from './routes/productsRoute.js';
import userRoute from './routes/userRoute.js';
import categoryRoute from './routes/categoryRoute.js';
import orderItemRoute from './routes/order_itemRoute.js';
import paymentRoute from './routes/paymentRoute.js';
import shippingRoute from './routes/shippingRoute.js';

const app = express();

export const allowedOrigins = ['https://ecommerce-front.vercel.app', 'http://localhost:5173'];

app.use(
  cors({
    origin: (origin, callback) => {
      // Si no hay origen (e.g., solicitudes como Postman), permitir
      if (!origin) return callback(null, true);

      // Verificar si el origen está en la lista de permitidos
      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        // Bloquear solicitudes desde orígenes no permitidos
        return callback(new Error('Not allowed by CORS'));
      }
    },
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
