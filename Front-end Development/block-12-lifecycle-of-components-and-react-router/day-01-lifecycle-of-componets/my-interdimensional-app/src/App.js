// App.js
import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
    };
  }

  componentDidMount = () => {
    this.fetchCharacters();
  };

  fetchCharacters = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const { results } = await response.json();
    this.setState({ characters: results });
  };

  render() {
    const { characters } = this.state;
    return (
      <div className="App">
        <h1>Ricky and Morty Characters:</h1>
        {characters.map(({ id, name, image }) => (
          <div key={id}>
            <p>{name}</p>
            <img src={image} alt={name} width="100" />
          </div>
        ))}
      </div>
    );
  }
}

export default App;
