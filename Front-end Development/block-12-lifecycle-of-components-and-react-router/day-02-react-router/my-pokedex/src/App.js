import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';
import ShowInfo from './PokemonDetails';
import About from './About';
import NotFound from './NotFound';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route
          path="/pokemon/:id"
          render={({ match }) => <ShowInfo {...match} pokemons={pokemons} />}
        />
        <Route path="/about" component={About} />
        <Route exact path="/" render={() => <Pokedex data={pokemons} />} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
