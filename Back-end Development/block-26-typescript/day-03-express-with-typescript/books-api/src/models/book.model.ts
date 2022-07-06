import { Pool, ResultSetHeader } from 'mysql2/promise';
import IBook from '../interfaces/book.interface';

export default class BookModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async getAll() {
    const [rows] = await this.connection.execute('SELECT * FROM books');
    return rows as IBook[];
  }

  async getById(id: number) {
    const [row] = await this.connection.execute(
      'SELECT * FROM books WHERE id = ?',
      [id]
    );
    return row as IBook[];
  }

  async create({ title, price, author, isbn }: IBook) {
    const [row] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO books (title, price, author, isbn) VALUES (?, ?, ?, ?)',
      [title, price, author, isbn]
    );
    return { id: row.insertId, title, price, author, isbn };
  }
}
