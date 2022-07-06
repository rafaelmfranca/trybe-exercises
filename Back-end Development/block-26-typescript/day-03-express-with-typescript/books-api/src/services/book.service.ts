import connection from '../db/connection';
import IBook from '../interfaces/book.interface';
import BookModel from '../models/book.model';

export default class BookService {
  model: BookModel;

  constructor() {
    this.model = new BookModel(connection);
  }

  async getAll() {
    return await this.model.getAll();
  }

  async getById(id: number) {
    const book = await this.model.getById(id);

    if (!book.length) {
      throw { name: 'NotFoundError', message: 'Book not found' };
    }

    return book;
  }

  async create(book: IBook) {
    return await this.model.create(book);
  }

  async remove(id: number) {
    const isBookRemoved = await this.model.delete(id);

    if (!isBookRemoved) {
      throw { name: 'NotFoundError', message: 'Book not found' };
    }

    return;
  }
}
