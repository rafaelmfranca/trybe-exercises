import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Pokemon.css';

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight, image } = this.props.data;
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
      </section>
    );
  }
}

Pokemon.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }),
    image: PropTypes.string,
  }).isRequired,
};

export default Pokemon;
