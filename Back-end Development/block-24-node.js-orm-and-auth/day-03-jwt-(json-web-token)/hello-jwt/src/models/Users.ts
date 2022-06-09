import { connection } from '@db';
import { ISignInPayload } from '@types';

export default {
  getByUsernameAndPassword: ({ username, password }: ISignInPayload) =>
    connection.query(
      'SELECT * FROM Users WHERE username = ? and password = ?',
      [username, password]
    ),
};
