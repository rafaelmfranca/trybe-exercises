import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import Header from './Header';

const App = () => {
  return (
    <>
      <Header />
      <Pokedex data={pokemons} />
    </>
  );
};

export default App;
