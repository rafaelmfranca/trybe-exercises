const books = require('./books');
const assert = require('assert');

const nameAndAge = () =>
  books
    .map(({ releaseYear, author }) => ({
      age: releaseYear - author.birthYear,
      author: author.name,
    }))
    .sort((a, b) => a.age - b.age);

const expectedResult = [
  {
    age: 31,
    author: 'Isaac Asimov',
  },
  {
    age: 38,
    author: 'H. P. Lovecraft',
  },
  {
    age: 39,
    author: 'Stephen King',
  },
  {
    age: 43,
    author: 'George R. R. Martin',
  },
  {
    age: 45,
    author: 'Frank Herbert',
  },
  {
    age: 62,
    author: 'J. R. R. Tolkien',
  },
];

assert.deepEqual(nameAndAge(), expectedResult);
