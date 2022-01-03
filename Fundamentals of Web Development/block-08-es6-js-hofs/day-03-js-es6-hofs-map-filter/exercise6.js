const books = require('./books');
const assert = require('assert');

const oldBooks = () => {
  const year = new Date().getFullYear();
  return books
    .filter(({ releaseYear }) => year - releaseYear > 60)
    .map(({ name }) => name);
};

const expectedResult = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu',
];

assert.deepEqual(oldBooks(), expectedResult);
