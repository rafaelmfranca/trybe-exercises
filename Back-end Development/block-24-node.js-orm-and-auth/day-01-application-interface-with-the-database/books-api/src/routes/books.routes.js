const express = require('express');
const booksController = require('../controllers/books.controller');

const booksRouter = express.Router();

booksRouter.route('/').get(booksController.getAll);

booksRouter.route('/:id').get(booksController.getById);

module.exports = booksRouter;
