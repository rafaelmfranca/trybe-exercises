const { Book } = require('../models');

function getAll() {
  return Book.findAll({ order: [['title', 'ASC']] });
}

function getById(id) {
  return Book.findByPk(id);
}

function create({ title, author, pageQuantity, publisher }) {
  return Book.create({
    title,
    author,
    pageQuantity,
    publisher,
  });
}

function update(id, { title, author, pageQuantity, publisher }) {
  return Book.update(
    { title, author, pageQuantity, publisher },
    { where: { id } }
  );
}

function remove(id) {
  return Book.destroy({ where: { id } });
}

function getByAuthor(author) {
  return Book.findAll({ where: { author }, order: [['title', 'ASC']] });
}

module.exports = { getAll, getById, create, update, remove, getByAuthor };
