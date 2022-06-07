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

module.exports = { getAll };
