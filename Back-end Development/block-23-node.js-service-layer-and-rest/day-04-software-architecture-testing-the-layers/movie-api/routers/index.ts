import express from 'express';
import MoviesController from '../controllers/MoviesController';

const router = express.Router();

router.use('/movies', MoviesController.router);

export default router;
