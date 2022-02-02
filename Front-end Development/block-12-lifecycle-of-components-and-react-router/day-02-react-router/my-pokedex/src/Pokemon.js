import React from 'react';
import PropTypes from 'prop-types';
import './Pokemon.css';

const Pokemon = ({ data: { name, type, averageWeight, image, moreInfo } }) => {
  const { value, measurementUnit } = averageWeight;

  const redirectToBulbapedia = (url) => window.open(url, '_blank');

  return (
    <section className="pokemon" onClick={() => redirectToBulbapedia(moreInfo)}>
      <p>{name}</p>
      <p>{type}</p>
      <p>
        {value}
        {measurementUnit}
      </p>
      <img src={image} alt={name} />
    </section>
  );
};

Pokemon.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }),
    image: PropTypes.string,
    moreInfo: PropTypes.string,
  }).isRequired,
};

export default Pokemon;
