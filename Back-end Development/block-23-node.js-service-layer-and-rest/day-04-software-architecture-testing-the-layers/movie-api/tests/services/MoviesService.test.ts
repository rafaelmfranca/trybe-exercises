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

describe('Get movie from DB by ID', () => {
  const movieId = 1;
  describe('when movie exists on DB', () => {
    before(() => {
      sinon.stub(MoviesModel, 'getById').resolves({
        title: 'Movie title',
        directed_by: 'John Doe',
        release_year: 1997,
      });
    });

    after(() => {
      sinon.restore();
    });

    it('returns an object', async () => {
      const response = await MoviesService.getById(movieId);
      expect(response).to.be.an('object');
    });

    it('the object has the correct properties', async () => {
      const response = await MoviesService.getById(movieId);
      expect(response).to.have.a.property('title');
      expect(response).to.have.a.property('directed_by');
      expect(response).to.have.a.property('release_year');
    });

    it('the object has the correct values', async () => {
      const response = await MoviesService.getById(movieId);
      expect(response.title).to.equal('Movie title');
      expect(response.directed_by).to.equal('John Doe');
      expect(response.release_year).to.equal(1997);
    });
  });

  describe('when movie not exists on DB', () => {
    const movieId = 1;

    before(() => {
      sinon.stub(MoviesModel, 'getById').resolves(null);
    });

    after(() => {
      sinon.restore();
    });

    it('returns an object', async () => {
      const response = await MoviesService.getById(movieId);
      expect(response).to.be.an('object');
    });

    it('the object has the correct propertie', async () => {
      const response = await MoviesService.getById(movieId);
      expect(response).to.have.a.property('message');
    });

    it('the object has the correct value', async () => {
      const response = await MoviesService.getById(movieId);
      expect(response.message).to.equal('Movie not found');
    });
  });
});
