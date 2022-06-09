import { connection } from '@db';

export default {
  getAll: () => connection.query('SELECT title, content FROM Posts'),
};
