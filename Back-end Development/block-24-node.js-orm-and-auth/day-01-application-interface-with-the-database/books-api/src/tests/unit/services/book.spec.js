const { expect } = require('chai');
const sinon = require('sinon');

const { Book } = require('../../../models');
const bookMock = require('../../__mocks__/bookMock');
const bookService = require('../../../services/books.service');

describe('✅ Books service', () => {
  describe('➡️ getAll() func', () => {
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

  describe('➡️ getById() func', () => {
    const findByPk = sinon.stub(Book, 'findByPk');
    let books;

    describe('when there is no book registered', async () => {
      before(async () => {
        findByPk.resolves(null);
        books = await bookService.getById(1);
      });

      after(() => {
        findByPk.reset();
      });

      it('should call Book.findByPk()', () => {
        expect(findByPk.calledOnce).to.be.true;
      });

      it('should return null', () => {
        expect(books).to.be.null;
      });
    });

    describe('when there is a book with specified id', async () => {
      before(async () => {
        findByPk.resolves(bookMock);
        books = await bookService.getById();
      });

      after(() => {
        findByPk.restore();
      });

      it('should call Book.findByPk()', () => {
        expect(findByPk.calledOnce).to.be.true;
      });

      it('should return an object with specified book', () => {
        expect(books).to.be.an('object').to.be.deep.equal(bookMock);
      });
    });
  });

  describe('➡️ create() func', () => {
    const create = sinon.stub(Book, 'create');
    let books;

    before(async () => {
      create.resolves({ id: 2, ...bookMock });
      books = await bookService.create(bookMock);
    });

    after(() => {
      create.reset();
    });

    it('should call Book.create()', () => {
      expect(create.calledOnce).to.be.true;
    });

    it('should return an object with the created book', () => {
      expect(books).to.includes(bookMock);
    });
  });
});
