import React from 'react';

const PokemonDetails = ({ pokemons, params: { id: paramId } }) => {
  const {
    name,
    type,
    averageWeight: { value, measurementUnit },
    summary,
    foundAt,
  } = pokemons.find(({ id }) => id === Number(paramId));

  return (
    <div key={paramId}>
      {' '}
      <p>{name}</p>
      <p>{type}</p>
      <p>
        {value}
        {measurementUnit}
      </p>
      <p>{summary}</p>
      {foundAt.map(({ location, map }, index) => (
        <p key={index}>{`${location}, ${map} `}</p>
      ))}
    </div>
  );
};

export default PokemonDetails;
