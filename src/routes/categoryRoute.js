import { Router } from 'express';
import postCategory from '../controllers/category/postCategory.js';
import validateDataCategory from '../middlewares/validateDataCategory.js';
import getCategory from '../controllers/category/getCategory.js';
import getCategoryById from '../controllers/category/getCategoryById.js';
import deleteCategory from '../controllers/category/deleteCategory.js';
import updateCategory from '../controllers/category/updateCategory.js';

const categoryRoute = Router();

categoryRoute.get('/', getCategory);
categoryRoute.get('/:id', getCategoryById);
categoryRoute.post('/', validateDataCategory, postCategory);
categoryRoute.put('/:id', updateCategory);
categoryRoute.delete('/:id', deleteCategory);

export default categoryRoute;
