import { postsController } from '@controllers';
import { auth } from '@middlewares';
import express from 'express';
import rescue from 'express-rescue';

const postsRouter = express.Router();

postsRouter.route('/').get(auth, rescue(postsController.getAll));

export default postsRouter;
