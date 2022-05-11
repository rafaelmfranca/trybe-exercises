const requestPokeAPI = require('../poke-api');
const { expect } = require('chai');
const sinon = require('sinon');
const axios = require('axios');

describe('requestPokeApi', () => {
  describe('when API returns success', () => {
    before(() => {
      sinon.stub(axios, 'get').resolves({ data: { name: 'rafael' } });
    });

    after(() => {
      axios.get.restore();
    });

    it('should return 10 pokemons', async () => {
      const qtd = 10;

      const pokemons = await requestPokeAPI(qtd);

      expect(pokemons.length).to.be.equal(qtd);
      expect(pokemons[0]).to.have.property('status');
      expect(pokemons[0].status).to.be.equal('fulfilled');

      expect(pokemons[0].value).to.have.property('data');
      expect(pokemons[0].value.data).to.have.property('name');
      expect(pokemons[0].value.data.name).to.be.equal('rafael');
    });
  });
});
