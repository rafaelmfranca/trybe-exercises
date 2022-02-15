import React from 'react';
import Pokemon from './Pokemon';
import Header from './Header';

const PokemonDetails = ({ pokemons, params: { id: paramId } }) => {
  const pokemon = pokemons.find(({ id }) => id === Number(paramId));
  const {
    name,
    type,
    averageWeight: { value, measurementUnit },
    summary,
    foundAt,
  } = pokemon;

  return (
    <main>
      <Header />
      <div key={paramId}>
        <div className="pokedex">
          <Pokemon data={pokemon} />
        </div>
        <p>{name}</p>
        <p>{type}</p>
        <p>
          {value}
          {measurementUnit}
        </p>
        <p>{summary}</p>
        {foundAt.map(({ location, map }, index) => (
          <div key={index}>
            <p>{location}</p>
            <img src={map} alt={location} />
          </div>
        ))}
        <label htmlFor="">
          {`Favorito `}
          <input type="checkbox" name="" id="" />
        </label>
      </div>
    </main>
  );
};

export default PokemonDetails;
