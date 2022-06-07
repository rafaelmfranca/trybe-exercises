const { expect } = require('chai');
const sinon = require('sinon');

const { Book } = require('../../../models');
const bookMock = require('../../__mocks__/bookMock');
const bookService = require('../../../services/books.service');

describe('Books service', () => {
  describe('getAll() func', () => {
    const findAll = sinon.stub(Book, 'findAll');
    let books;

    describe('when there is no book registered', async () => {
      before(async () => {
        findAll.resolves([]);
        books = await bookService.getAll();
      });

      after(() => {
        findAll.reset();
      });

      it('should call Book.findAll()', () => {
        expect(findAll.calledOnce).to.be.true;
      });

      it('should return an empty array', () => {
        expect(books).to.be.an('array').that.is.empty;
      });
    });

    describe('when there is at least a book registered', async () => {
      before(async () => {
        findAll.resolves([bookMock]);
        books = await bookService.getAll();
      });

      after(() => {
        findAll.restore();
      });

      it('should call Book.findAll()', () => {
        expect(findAll.calledOnce).to.be.true;
      });

      it('should return an filled array', () => {
        expect(books).to.be.an('array').to.be.deep.equal([bookMock]);
      });
    });
  });
});
