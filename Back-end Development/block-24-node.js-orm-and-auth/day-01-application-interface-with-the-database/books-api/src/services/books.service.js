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

function update(id, { title, author, pageQuantity }) {
  return Book.update({ title, author, pageQuantity }, { where: { id } });
}

function remove(id) {
  return Book.destroy({ where: { id } });
}

module.exports = { getAll, getById, create, update, remove };
