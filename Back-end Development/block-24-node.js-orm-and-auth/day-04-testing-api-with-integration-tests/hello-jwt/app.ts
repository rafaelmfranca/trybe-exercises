import { errorMiddleware } from '@middlewares';
import mainRouter from '@routes';
import express from 'express';

const app = express();

app.use(express.json());
app.use(mainRouter);
app.use(errorMiddleware);

export default app;
