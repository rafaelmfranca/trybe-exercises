import express from 'express';
import 'express-async-errors';
import errorMiddleware from '../middlewares/error.middleware';

const app = express();

app.use(express.json()).use(errorMiddleware);

export default app;
