import React from 'react';
import Pokemon from './Pokemon';

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
    </div>
  );
};

export default PokemonDetails;
