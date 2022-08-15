import { Router } from 'express';
import { frameRouter } from '../routes';

const router = Router();

router.use('/frame', frameRouter);

export default router;
