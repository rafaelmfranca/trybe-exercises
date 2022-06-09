import { authController } from '@controllers';
import { validateSignIn } from '@middlewares';
import express from 'express';
import rescue from 'express-rescue';

const authRouter = express.Router();

authRouter.route('/').post(validateSignIn, rescue(authController.signIn));

export default authRouter;
