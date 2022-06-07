const express = require('express');
const booksController = require('../controllers/books.controller');

const booksRouter = express.Router();

booksRouter.route('/').get(booksController.getAll).post(booksController.create);

booksRouter
  .route('/:id')
  .get(booksController.getById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = booksRouter;
