const books = require('./books');
const assert = require('assert');

const formatedBookNames = () =>
  books.map(({ name, genre, author }) => `${name} - ${genre} - ${author.name}`);

const expectedResult = [
  'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
  'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
  'Fundação - Ficção Científica - Isaac Asimov',
  'Duna - Ficção Científica - Frank Herbert',
  'A Coisa - Terror - Stephen King',
  'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
];

assert.deepEqual(formatedBookNames(), expectedResult);
