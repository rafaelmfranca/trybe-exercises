import { Router } from 'express';
import BookController from '../controllers/book.controller';
import bookMiddleware from '../middlewares/book.middleware';

const bookRouter = Router();
const bookController = new BookController();

bookRouter
  .route('/books')
  .get(bookController.getAll)
  .post(bookMiddleware, bookController.create);

bookRouter.route('/books/:id').get(bookController.getById);

export default bookRouter;
