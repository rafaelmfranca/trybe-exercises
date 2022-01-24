import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Image extends Component {
  render() {
    const { source, alternativeText } = this.props;

    return <img src={source} alt={alternativeText} />;
  }
}

Image.propTypes = {
  source: PropTypes.string,
  alternativeText: PropTypes.string,
}.isRequired;
