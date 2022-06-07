const { StatusCodes } = require('http-status-codes');
const booksService = require('../services/books.service');

async function getAll(req, res, next) {
  try {
    const { author } = req.query;

    let books;

    if (author) books = await booksService.getByAuthor(author);
    else books = await booksService.getAll();

    res.status(StatusCodes.OK).json(books);
  } catch (err) {
    next(err);
  }
}

async function getById(req, res, next) {
  try {
    const book = await booksService.getById(req.params.id);

    if (!book) {
      return res.status(StatusCodes.NOT_FOUND).json({
        message: 'Book not found',
      });
    }

    res.status(StatusCodes.OK).json(book);
  } catch (err) {
    next(err);
  }
}

async function create(req, res, next) {
  try {
    const book = await booksService.create(req.body);
    res.status(StatusCodes.CREATED).json(book);
  } catch (err) {
    next(err);
  }
}

async function update(req, res, next) {
  try {
    const [book] = await booksService.update(req.params.id, req.body);

    if (!book) {
      return res.status(StatusCodes.NOT_FOUND).json({
        message: 'Book not found',
      });
    }

    res.status(StatusCodes.OK).json({ message: 'Book updated' });
  } catch (err) {
    next(err);
  }
}

async function remove(req, res, next) {
  try {
    const book = await booksService.remove(req.params.id);

    if (!book) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ message: 'Book not found' });
    }

    return res.status(StatusCodes.OK).json({ message: 'Book removed' });
  } catch (err) {
    next(err);
  }
}

module.exports = { getAll, getById, create, update, remove };
