import express from 'express';
import 'express-async-errors';
import errorMiddleware from '../middlewares/error.middleware';
import booksRoutes from '../routes/books.routes';

const app = express();

app.use(express.json()).use(booksRoutes).use(errorMiddleware);

export default app;
