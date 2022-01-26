import React, { Component } from 'react';

export default class Button extends Component {
  render() {
    const { onClick } = this.props;

    return <button onClick={onClick}>Next pokemon</button>;
  }
}
