import React from 'react';
import './Pokemon.css';
import { Link } from 'react-router-dom';

const Pokemon = ({
  data: { id, name, type, averageWeight, image },
  needInfo,
}) => {
  const { value, measurementUnit } = averageWeight;

  return (
    <section className="pokemon">
      <p>{name}</p>
      <p>{type}</p>
      <p>
        {value}
        {measurementUnit}
      </p>
      <img src={image} alt={name} />
      {needInfo && <Link to={`pokemon/${id}`}>More info</Link>}
    </section>
  );
};

export default Pokemon;
