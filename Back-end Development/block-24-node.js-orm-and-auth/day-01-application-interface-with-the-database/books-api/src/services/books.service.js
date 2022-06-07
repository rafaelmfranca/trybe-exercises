const { Book } = require('../models');

function getAll() {
  return Book.findAll();
}

function getById(id) {
  return Book.findByPk(id);
}

function create({ title, author, pageQuantity }) {
  return Book.create({
    title,
    author,
    pageQuantity,
  });
}

module.exports = { getAll, getById, create };
