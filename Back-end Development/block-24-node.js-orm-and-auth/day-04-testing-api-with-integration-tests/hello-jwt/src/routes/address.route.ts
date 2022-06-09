import { addressController } from '@controllers';
import { auth } from '@middlewares';
import express from 'express';
import rescue from 'express-rescue';

const addressRouter = express.Router();

addressRouter.route('/').get(auth, rescue(addressController.getByUsername));

export default addressRouter;
