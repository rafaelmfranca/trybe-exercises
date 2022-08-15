import express from 'express';
import 'express-async-errors';
import error from '../middlewares/error';
import router from './route';

const app = express();

app.use(express.json()).use(router).use(error);

export default app;
