import { IUserInput } from '../@types/common';
import { connection } from '../db/connection';

export async function create(user: IUserInput) {
  const [row] = JSON.parse(
    JSON.stringify(
      await connection.execute(
        'INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)',
        [user.firstName, user.lastName, user.email, user.password]
      )
    )
  );
  return { id: row.insertId, ...user };
}

export async function getAll() {
  const [rows] = JSON.parse(
    JSON.stringify(await connection.execute('SELECT * FROM users'))
  );

  return rows;
}

export async function getById(id: string) {
  const [rows] = JSON.parse(
    JSON.stringify(
      await connection.execute(
        'SELECT first_name, last_name, email, password FROM users WHERE id = ?',
        [id]
      )
    )
  );

  return rows[0];
}
