import { authController } from '@controllers';
import { validateSignIn } from '@middlewares';
import express from 'express';

const authRouter = express.Router();

authRouter.route('/').post(validateSignIn, authController.signIn);

export default authRouter;
