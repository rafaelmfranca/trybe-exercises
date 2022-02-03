import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import ShowInfo from './PokemonDetails';
import Header from './Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <main>
              <Header />
              <Pokedex data={pokemons} />
            </main>
          )}
        />
        <Route
          path="/pokemon/:id"
          render={({ match }) => (
            <main>
              <Header />
              <ShowInfo {...match} pokemons={pokemons} />
            </main>
          )}
        />
      </Switch>
    </Router>
  );
};

export default App;
