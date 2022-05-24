import { IMoviePayload } from '../compiler/types';
import connection from '../db/connection';

async function create({ title, directedBy, releaseYear }: IMoviePayload) {
  const [result] = JSON.parse(
    JSON.stringify(
      await connection.execute(
        'INSERT INTO movies (title, directed_by, release_year) VALUES (?, ?, ?)',
        [title, directedBy, releaseYear]
      )
    )
  );

  return { id: result.insertId };
}

async function getById(id: number) {
  const [result] = JSON.parse(
    JSON.stringify(
      await connection.execute(
        'SELECT title, directed_by, release_year FROM movies WHERE id = ?',
        [id]
      )
    )
  );

  if (!result.length) return null;

  return result[0];
}

export default { create, getById };
