import { Router } from 'express';
import BookController from '../controllers/book.controller';

const bookRouter = Router();
const bookController = new BookController();

bookRouter.route('/books').get(bookController.getAll);

export default bookRouter;
