import React, { Component } from 'react';
import Pokemon from './Pokemon';
import Button from './Button';
import './Pokedex.css';

export default class Pokedex extends Component {
  constructor() {
    super();

    this.state = {
      stateIndex: 0,
    };

    this.nextPokemon = this.nextPokemon.bind(this);
  }

  nextPokemon(numberOfPokemons) {
    this.setState(({ stateIndex: prevIndex }) => ({
      stateIndex: (prevIndex + 1) % numberOfPokemons,
    }));
  }

  render() {
    const pokemons = this.props.data;
    const { stateIndex } = this.state;
    const currPokemon = pokemons[stateIndex];

    return (
      <section>
        <div className="pokedex">
          <Pokemon key={currPokemon.id} data={currPokemon} />
        </div>
        <div className="next-pokemon">
          <Button onClick={() => this.nextPokemon(pokemons.length)} />
        </div>
      </section>
    );
  }
}
