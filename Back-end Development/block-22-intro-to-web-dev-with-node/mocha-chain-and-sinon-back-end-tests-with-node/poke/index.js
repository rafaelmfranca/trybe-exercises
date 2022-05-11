const requestPokeAPI = require('./poke-api');

async function main() {
  const pokemons = await requestPokeAPI(10);

  pokemons
    .map((response) => response.value.data)
    .forEach((pokemon, i) => {
      console.log(`${i + 1} - ${pokemon.name}`);
    });
}

main();
