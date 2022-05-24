import express, { Request, Response } from 'express';
import MoviesService from '../services/MoviesService';

const router = express.Router();

async function create(req: Request, res: Response) {
  const { title, directedBy, releaseYear } = req.body;

  const movieId = await MoviesService.create({
    title,
    directedBy,
    releaseYear,
  });

  if (!movieId) {
    return res.status(400).send('Invalid payload');
  }

  return res.status(201).send('Movie created');
}

router.route('/').post(create);

export default { router, create };
