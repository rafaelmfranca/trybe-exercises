import { connection } from '@db';
import { ISignInPayload } from '@types';

export default {
  getByUsernameAndPassword: ({ username, password }: ISignInPayload) =>
    connection.query(
      'SELECT * FROM staff WHERE username = ? and password = ?',
      [username, password]
    ),

  getAll: () => connection.query('SELECT * FROM staff'),
};
