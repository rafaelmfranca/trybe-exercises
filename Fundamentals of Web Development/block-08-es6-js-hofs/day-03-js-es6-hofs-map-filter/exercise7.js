const books = require('./books');
const assert = require('assert');

const authorWith3DotsOnName = () =>
  books.find(({ author: { name } }) => name.match(/([A-Z])\./g).length === 3)
    .name;

const expectedResult = 'O Senhor dos Anéis';

assert.deepEqual(authorWith3DotsOnName(), expectedResult);
