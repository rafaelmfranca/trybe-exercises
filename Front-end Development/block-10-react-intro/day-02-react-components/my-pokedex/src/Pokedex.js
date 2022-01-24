import React, { Component } from 'react';
import Pokemon from './Pokemon';
import './Pokedex.css';

export default class Pokedex extends Component {
  render() {
    const pokemons = this.props.data;

    return (
      <div className="pokedex">
        {pokemons.map((pokemon) => (
          <Pokemon key={pokemon.id} data={pokemon} />
        ))}
      </div>
    );
  }
}
