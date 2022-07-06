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

  getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const [book] = await this.service.getById(Number(id));
    res.status(StatusCodes.OK).json(book);
  };

  create = async (req: Request, res: Response) => {
    const { title, price, author, isbn } = req.body;
    const book = await this.service.create({ title, price, author, isbn });
    res.status(StatusCodes.CREATED).json(book);
  };

  remove = async (req: Request, res: Response) => {
    const { id } = req.params;
    await this.service.remove(Number(id));
    res.status(StatusCodes.NO_CONTENT).end();
  };
}
