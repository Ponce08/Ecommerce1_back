import { Router } from 'express';
import postUser from '../controllers/users/postUser.js';
import validateDataUser from '../middlewares/validateDataUser.js';
import getUser from '../controllers/users/getUsers.js';
import getUserById from '../controllers/users/getUserById.js';
import deleteUser from '../controllers/users/deleteUser.js';
import updateUser from '../controllers/users/updateUser.js';

const userRoute = Router();

userRoute.get('/', getUser);
userRoute.get('/:id', getUserById);
userRoute.post('/', validateDataUser, postUser);
userRoute.put('/:id', updateUser);
userRoute.delete('/:id', deleteUser);

export default userRoute;
