import { expect } from 'chai';
import sinon from 'sinon';
import connection from '../../db/connection';
import MoviesModel from '../../models/MoviesModel';

describe('Insert a new movie into BD', () => {
  const moviePayload = {
    title: 'Movie title',
    directedBy: 'John Doe',
    releaseYear: 1997,
  };

  before(() => {
    const result = [{ insertId: 1 }];
    sinon
      .stub(connection, 'execute')
      .resolves(JSON.parse(JSON.stringify(result)));
  });

  after(() => {
    sinon.restore();
  });

  describe('when is inserted successfully', () => {
    it('returns an object', async () => {
      const response = await MoviesModel.create(moviePayload);
      expect(response).to.be.an('object');
    });

    it('object has the "id" of the new movie inserted', async () => {
      const response = await MoviesModel.create(moviePayload);
      expect(response).to.have.a.property('id');
      expect(response.id).to.equal(1);
    });
  });
});

describe('Get movie from DB by ID', () => {
  describe('when movie exists on DB', () => {
    const movieId = 1;

    before(() => {
      const result = [
        { title: 'Movie title', directed_by: 'John Doe', release_year: 1997 },
      ];
      sinon
        .stub(connection, 'execute')
        .resolves(JSON.parse(JSON.stringify([result])));
    });

    after(() => {
      sinon.restore();
    });

    it('returns an object', async () => {
      const response = await MoviesModel.getById(movieId);
      expect(response).to.be.an('object');
    });
  });

  describe('when movie not exists on DB', () => {
    const movieId = 1;

    before(() => {
      const result = [[]];
      sinon
        .stub(connection, 'execute')
        .resolves(JSON.parse(JSON.stringify(result)));
    });

    after(() => {
      sinon.restore();
    });

    it('returns an object', async () => {
      const response = await MoviesModel.getById(movieId);
      expect(response).to.be.null;
    });
  });
});
