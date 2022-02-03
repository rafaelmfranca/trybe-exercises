import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <h1>Pokédex</h1>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">About</Link>
        </li>
        <li>
          <Link to="/">Favorite Pokémons</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
