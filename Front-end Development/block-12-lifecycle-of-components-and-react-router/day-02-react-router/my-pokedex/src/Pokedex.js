import React, { Component } from 'react';
import Pokemon from './Pokemon';
import Button from './Button';
import './Pokedex.css';

export default class Pokedex extends Component {
  constructor() {
    super();

    this.state = {
      stateIndex: 0,
      activeFilter: 'all',
    };
  }

  changeActiveFilter(newFilter) {
    this.setState({ stateIndex: 0, activeFilter: newFilter });
  }

  filterPokemons() {
    const pokemons = this.props.data;
    const { activeFilter } = this.state;

    return activeFilter === 'all'
      ? pokemons
      : pokemons.filter(({ type }) => type === activeFilter);
  }

  nextPokemon(numberOfPokemons) {
    this.setState(({ stateIndex: prevIndex }) => ({
      stateIndex: (prevIndex + 1) % numberOfPokemons,
    }));
  }

  getPokemonTypes() {
    const pokemons = this.props.data;
    const types = pokemons.map(({ type }) => type);
    return [...new Set(types)];
  }

  render() {
    const { stateIndex } = this.state;
    const filteredPokemons = this.filterPokemons();
    const pokemonTypes = this.getPokemonTypes();
    const currPokemon = filteredPokemons[stateIndex];

    return (
      <section>
        <div className="pokedex">
          <Pokemon key={currPokemon.id} data={currPokemon} />
        </div>
        <div>
          <Button
            key="all"
            className="All"
            onClick={() => this.changeActiveFilter('all')}
          />
          {pokemonTypes.map((type) => (
            <Button
              key={type}
              className={type}
              onClick={() => this.changeActiveFilter(type)}
            />
          ))}
        </div>
        <div>
          <Button
            className="Next Pokemon"
            onClick={() => this.nextPokemon(filteredPokemons.length)}
            disabled={filteredPokemons.length <= 1}
          />
        </div>
      </section>
    );
  }
}
