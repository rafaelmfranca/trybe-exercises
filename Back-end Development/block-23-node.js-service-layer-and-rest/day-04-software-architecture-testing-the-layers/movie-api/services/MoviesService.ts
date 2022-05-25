import { IMoviePayload } from '../compiler/types';
import MoviesModel from '../models/MoviesModel';

function validateMoviePayload(
  title: string,
  directedBy: string,
  releaseYear: number
) {
  if (!title || !directedBy || !releaseYear) return false;

  return true;
}

async function create({ title, directedBy, releaseYear }: IMoviePayload) {
  const isValidMovie = validateMoviePayload(title, directedBy, releaseYear);
  if (!isValidMovie) return false;

  const { id } = await MoviesModel.create({ title, directedBy, releaseYear });

  return id;
}

async function getById(id: number) {
  const response = await MoviesModel.getById(id);

  if (!response)
    return {
      message: 'Movie not found',
    };

  return response;
}

export default { create, getById };
