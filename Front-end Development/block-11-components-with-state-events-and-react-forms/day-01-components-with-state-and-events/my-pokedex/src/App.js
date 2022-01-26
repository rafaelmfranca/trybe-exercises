import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import Header from './Header';

const App = () => {
  return (
    <main>
      <Header />
      <Pokedex data={pokemons} />
    </main>
  );
};

export default App;
