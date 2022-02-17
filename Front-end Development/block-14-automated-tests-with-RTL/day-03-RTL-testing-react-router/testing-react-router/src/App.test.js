import { screen } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import userEvent from '@testing-library/user-event';
import App, { About } from './App';

describe('Testing all application', () => {
  test('render App', () => {
    renderWithRouter(<App />);

    const homeTitle = screen.getByRole('heading', {
      name: /você está na página início/i,
    });

    expect(homeTitle).toBeInTheDocument();
  });

  test('render About', () => {
    const { history } = renderWithRouter(<App />);

    const aboutLink = screen.getByRole('link', {
      name: /sobre/i,
    });

    userEvent.click(aboutLink);

    const { pathname } = history.location;
    expect(pathname).toBe('/about');

    const aboutTitle = screen.getByRole('heading', {
      name: /você está na página sobre/i,
    });
    expect(aboutTitle).toBeInTheDocument();
  });

  test('render NoMatch', () => {
    const { history } = renderWithRouter(<App />);

    history.push('/notfound');

    const notFoundTitle = screen.getByRole('heading', {
      name: /página não encontrada/i,
    });
    expect(notFoundTitle).toBeInTheDocument();
  });

  test('render About (component)', () => {
    renderWithRouter(<About />);

    const aboutTitle = screen.getByRole('heading', {
      name: /você está na página sobre/i,
    });
    expect(aboutTitle).toBeInTheDocument();
  });
});
