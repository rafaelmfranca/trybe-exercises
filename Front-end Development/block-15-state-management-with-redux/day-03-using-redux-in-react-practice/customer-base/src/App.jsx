import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Customers from './pages/Customers';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/customers" component={Customers} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
