const { StatusCodes } = require('http-status-codes');
const booksService = require('../services/books.service');

async function getAll(_req, res, next) {
  try {
    const books = await booksService.getAll();
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

module.exports = { getAll, getById };
