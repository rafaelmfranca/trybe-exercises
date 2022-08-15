import { Router } from 'express';
import FrameController from '../controllers/frame';
import FrameModel from '../models/frame';
import FrameService from '../services/frame';

const frameRouter = Router();

const frameModel = new FrameModel();
const frameService = new FrameService(frameModel);
const frameController = new FrameController(frameService);

frameRouter.route('/').post(frameController.create).get(frameController.read);
frameRouter.route('/:id').get(frameController.readOne);

export default frameRouter;
