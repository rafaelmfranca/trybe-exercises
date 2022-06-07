const express = require('express');
const booksController = require('../controllers/books.controller');

const booksRouter = express.Router();

booksRouter.route('/').get(booksController.getAll);

module.exports = booksRouter;
