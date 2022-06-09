import { staffController } from '@controllers';
import express from 'express';
import rescue from 'express-rescue';

const staffRouter = express.Router();

staffRouter.route('/').get(rescue(staffController.getAll));

export default staffRouter;
