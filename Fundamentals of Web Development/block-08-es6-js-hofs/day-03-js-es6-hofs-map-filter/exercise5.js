const books = require('./books');
const assert = require('assert');

const fantasyOrScienceFictionAuthors = () =>
  books
    .filter(
      ({ genre }) => genre === 'Fantasia' || genre === 'Ficção Científica'
    )
    .map(({ author: { name } }) => name)
    .sort();

const expectedResult = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien',
];

assert.deepEqual(fantasyOrScienceFictionAuthors(), expectedResult);
