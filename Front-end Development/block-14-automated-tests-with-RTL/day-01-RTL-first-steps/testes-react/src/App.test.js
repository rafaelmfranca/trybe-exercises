// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Tela de inserção de email', () => {
  it('Verificando se existe o campo Email.', () => {
    render(<App />);
    const inputEmail = screen.getByLabelText('Email');
    expect(inputEmail).toBeInTheDocument();
    expect(inputEmail).toHaveProperty('type', 'email');
  });

  it('Verificando se existe o botão "Enviar"', () => {
    render(<App />);
    const button = screen.getByTestId('id-send');
    expect(button).toBeInTheDocument();
    expect(button).toHaveProperty('type', 'button');
    expect(button).toHaveValue('Enviar');
  });

  it('Verificando se existe dois botões', () => {
    render(<App />);
    const buttons = screen.getAllByRole('button');
    expect(buttons).toHaveLength(2);
  });

  it('Verifica se ao digitar o email e clicar em "Enviar", o email é renderizado', () => {
    render(<App />);

    const EMAIL_USER = 'email@email.com';

    const inputEmail = screen.getByLabelText('Email');
    const button = screen.getByTestId('id-send');
    const userEmail = screen.getByTestId('id-email-user');

    userEvent.type(inputEmail, EMAIL_USER);
    userEvent.click(button);

    expect(inputEmail).toHaveValue('');
    expect(userEmail).toHaveTextContent(`Valor: ${EMAIL_USER}`);
  });
});
