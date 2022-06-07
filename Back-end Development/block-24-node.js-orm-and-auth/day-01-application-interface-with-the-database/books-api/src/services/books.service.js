const { Book } = require('../models');

function getAll() {
  return Book.findAll();
}

module.exports = { getAll };
