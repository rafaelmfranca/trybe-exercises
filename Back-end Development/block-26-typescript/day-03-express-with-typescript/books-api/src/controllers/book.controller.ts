import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import BookService from '../services/book.service';

export default class BookController {
  service: BookService;

  constructor() {
    this.service = new BookService();
  }

  getAll = async (_req: Request, res: Response) => {
    const books = await this.service.getAll();
    res.status(StatusCodes.OK).json(books);
  };
}
