import { expect } from 'chai';
import sinon from 'sinon';
import MoviesModel from '../../models/MoviesModel';
import MoviesService from '../../services/MoviesService';

describe('Insert a new movie into BD', () => {
  const ID = 1;

  const moviePayload = {
    title: 'Movie title',
    directedBy: 'John Doe',
    releaseYear: 1997,
  };

  const invalidMoviePayload = {
    title: '',
    directedBy: '',
    releaseYear: 1997,
  };

  before(() => {
    sinon.stub(MoviesModel, 'create').resolves({ id: ID });
  });

  after(() => {
    sinon.restore();
  });

  describe('when the payload is invalid', () => {
    it('returns an boolean', async () => {
      const response = await MoviesService.create(invalidMoviePayload);
      expect(response).to.be.an('boolean');
    });

    it('the boolean is false', async () => {
      const response = await MoviesService.create(invalidMoviePayload);
      expect(response).to.equal(false);
    });
  });

  describe('when is inserted successfully', () => {
    it('returns a number', async () => {
      const response = await MoviesService.create(moviePayload);
      expect(response).to.be.an('number');
    });

    it('the number has the "id" value of the new movie inserted', async () => {
      const response = await MoviesService.create(moviePayload);
      expect(response).to.equal(ID);
    });
  });
});
