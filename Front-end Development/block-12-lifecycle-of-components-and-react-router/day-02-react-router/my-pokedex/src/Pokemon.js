import React from 'react';
import PropTypes from 'prop-types';
import './Pokemon.css';
import { Link } from 'react-router-dom';

const Pokemon = ({ data: { id, name, type, averageWeight, image } }) => {
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
      <Link to={`pokemon/${id}`}>More info</Link>
    </section>
  );
};

Pokemon.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.string,
      measurementUnit: PropTypes.string,
    }),
    image: PropTypes.string,
  }).isRequired,
};

export default Pokemon;
