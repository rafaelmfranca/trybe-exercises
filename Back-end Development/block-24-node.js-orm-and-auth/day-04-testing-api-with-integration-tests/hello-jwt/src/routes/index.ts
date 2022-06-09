import express from 'express';
import addressRouter from './address.route';
import authRouter from './auth.route';
import staffRouter from './staff.route';

const mainRouter = express.Router();

mainRouter.use('/auth', authRouter);
mainRouter.use('/address', addressRouter);
mainRouter.use('/staff', staffRouter);

export default mainRouter;
