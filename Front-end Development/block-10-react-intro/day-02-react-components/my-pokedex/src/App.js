import './App.css';
import pokemons from './data';
import Pokemon from './Pokemon';

const App = () => {
  return pokemons.map((pokemon) => <Pokemon key={pokemon.id} data={pokemon} />);
};

export default App;
