import connection from '../db/connection';
import BookModel from '../models/book.model';

export default class BookService {
  model: BookModel;

  constructor() {
    this.model = new BookModel(connection);
  }

  async getAll() {
    return await this.model.getAll();
  }
}
