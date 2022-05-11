const axios = require('axios');

const getPokemonById = (id) => {
  return axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
};

const requestPokeAPI = async (qtd) => {
  const promises = [];

  for (let i = 1; i <= qtd; i++) {
    promises.push(getPokemonById(i));
  }

  return (await Promise.allSettled(promises)).filter(
    (response) => response.status == 'fulfilled'
  );
};

module.exports = requestPokeAPI;
