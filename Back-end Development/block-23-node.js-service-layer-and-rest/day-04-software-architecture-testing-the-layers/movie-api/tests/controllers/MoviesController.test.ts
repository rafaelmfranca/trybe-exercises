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
