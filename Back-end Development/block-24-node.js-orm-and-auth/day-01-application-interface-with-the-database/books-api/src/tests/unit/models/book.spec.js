const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const BookModel = require('../../../models/book');

describe('Book model', () => {
  const Book = BookModel(sequelize, dataTypes);
  const book = new Book();

  it('should be named as "Book', () => {
    checkModelName(Book)('Book');
  });

  it('should have correct properties', () => {
    ['id', 'title', 'author', 'pageQuantity', 'publisher'].forEach(
      checkPropertyExists(book)
    );
  });
});
