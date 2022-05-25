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

async function getById(req: Request, res: Response) {
  const movie = await MoviesService.getById(Number(req.params.id));

  if (movie.message) {
    return res.status(404).send(movie.message);
  }

  return res.status(200).send(movie);
}

router.route('/').post(create);
router.route('/:id').get(getById);

export default { router, create, getById };
