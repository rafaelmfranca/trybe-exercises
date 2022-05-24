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

export default { create };
