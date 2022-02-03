import React from 'react';
import Header from './Header';

const NotFound = () => {
  return (
    <main>
      <Header />
      <section>
        <h2>Page Not Found</h2>
        <img
          width="200"
          src="https://c.tenor.com/J6lraJXFl4IAAAAC/pokemon-pikachu.gif"
          alt="Pikachu crying"
        />
      </section>
    </main>
  );
};

export default NotFound;
