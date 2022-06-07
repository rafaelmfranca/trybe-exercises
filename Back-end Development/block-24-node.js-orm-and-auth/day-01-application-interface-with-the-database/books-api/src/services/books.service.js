const { Book } = require('../models');

function getAll() {
  return Book.findAll();
}

function getById(id) {
  return Book.findByPk(id);
}

module.exports = { getAll, getById };
