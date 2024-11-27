import express from 'express';
import productRoute from './routes/productsRoute.js';
import userRoute from './routes/userRoute.js';
import categoryRoute from './routes/categoryRoute.js';
import orderItemRoute from './routes/order_itemRoute.js';
import paymentRoute from './routes/paymentRoute.js';
import shippingRoute from './routes/shippingRoute.js';

const App = express();

App.use(express.json());

App.use('/products', productRoute);
App.use('/category', categoryRoute);
App.use('/orderItem', orderItemRoute);
App.use('/payment', paymentRoute);
App.use('/shipping', shippingRoute);

App.use('/user', userRoute);

export default App;
