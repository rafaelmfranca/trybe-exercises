import { expect } from 'chai';
import sinon from 'sinon';
import MoviesController from '../../controllers/MoviesController';
import MoviesService from '../../services/MoviesService';

describe('When call /POST method on MoviesController ', () => {
  describe('when the payload is invalid', () => {
    const response = {} as any;
    const request = {} as any;

    before(() => {
      request.body = {
        title: '',
        directedBy: '',
        releaseYear: 1997,
      };

      response.status = sinon.stub().returns(response);
      response.send = sinon.stub().returns('');

      sinon.stub(MoviesService, 'create').resolves(false);
    });

    after(() => {
      sinon.restore();
    });

    it('response was called with 400 status code', async () => {
      await MoviesController.create(request, response);
      expect(response.status.calledWith(400)).to.be.equal(true);
    });

    it('response was called with correct message', async () => {
      await MoviesController.create(request, response);
      expect(response.send.calledWith('Invalid payload')).to.be.equal(true);
    });
  });

  describe('when is inserted successfully', () => {
    const response = {} as any;
    const request = {} as any;

    before(() => {
      request.body = {
        title: 'Title',
        directedBy: 'Director',
        releaseYear: 1997,
      };

      response.status = sinon.stub().returns(response);
      response.send = sinon.stub().returns('');

      sinon.stub(MoviesService, 'create').resolves(true);
    });

    after(() => {
      sinon.restore();
    });

    it('response was called with 201 status code', async () => {
      await MoviesController.create(request, response);
      expect(response.status.calledWith(201)).to.be.equal(true);
    });

    it('response was called with correct message', async () => {
      await MoviesController.create(request, response);
      expect(response.send.calledWith('Movie created')).to.be.equal(true);
    });
  });
});

describe('When call /GET method on MoviesController ', () => {
  describe('when movie exists on DB', () => {
    const movie = {
      title: 'Movie title',
      directed_by: 'John Doe',
      release_year: 1997,
    };

    const response = {} as any;
    const request = {} as any;

    before(() => {
      request.params = { id: '1' };

      response.status = sinon.stub().returns(response);
      response.send = sinon.stub().returns('');

      sinon.stub(MoviesService, 'getById').resolves(movie);
    });

    after(() => {
      sinon.restore();
    });

    it('response was called with 200 status code', async () => {
      await MoviesController.getById(request, response);
      expect(response.status.calledWith(200)).to.be.equal(true);
    });

    it('response was called with correct message', async () => {
      await MoviesController.getById(request, response);
      expect(response.send.calledWith(movie)).to.be.equal(true);
    });
  });

  describe('when movie not exists on DB', () => {
    const response = {} as any;
    const request = {} as any;

    before(() => {
      request.params = { id: '1' };

      response.status = sinon.stub().returns(response);
      response.send = sinon.stub().returns('');

      sinon.stub(MoviesService, 'getById').resolves({
        message: 'Movie not found',
      });
    });

    after(() => {
      sinon.restore();
    });

    it('response was called with 201 status code', async () => {
      await MoviesController.getById(request, response);
      expect(response.status.calledWith(404)).to.be.equal(true);
    });

    it('response was called with correct message', async () => {
      await MoviesController.getById(request, response);
      expect(response.send.calledWith('Movie not found')).to.be.equal(true);
    });
  });
});
