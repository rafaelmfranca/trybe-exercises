import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Pokemon.css';

class Pokemon extends Component {
  constructor() {
    super();
    this.redirectToBulbapedia = this.redirectToBulbapedia.bind(this);
  }

  redirectToBulbapedia() {
    const { moreInfo } = this.props.data;
    window.open(moreInfo, '_blank');
  }

  render() {
    const { name, type, averageWeight, image } = this.props.data;
    const { value, measurementUnit } = averageWeight;

    return (
      <section className="pokemon" onClick={this.redirectToBulbapedia}>
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
    moreInfo: PropTypes.string,
  }).isRequired,
};

export default Pokemon;
