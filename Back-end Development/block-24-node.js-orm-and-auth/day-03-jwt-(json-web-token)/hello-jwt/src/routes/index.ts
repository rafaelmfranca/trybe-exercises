import express from 'express';
import authRouter from './auth.route';
import postsRouter from './posts.route';

const mainRouter = express.Router();

mainRouter.use('/auth', authRouter);
mainRouter.use('/posts', postsRouter);

export default mainRouter;
