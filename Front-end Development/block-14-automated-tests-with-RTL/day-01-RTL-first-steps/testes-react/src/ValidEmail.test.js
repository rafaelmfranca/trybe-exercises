import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from './ValidEmail';

test('Testando um componente, caso o email seja válido.', () => {
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={EMAIL_USER} />);
  const isValid = screen.getByText('Email Valido');
  expect(isValid).toBeInTheDocument();
});

test('Testando um componente, caso o email seja inválido.', () => {
  const EMAIL_USER = 'emailerrado';
  render(<ValidEmail email={EMAIL_USER} />);
  const isValid = screen.getByText('Email Inválido');
  expect(isValid).toBeInTheDocument();
});

test('Testando se o componente não aparece caso o campo email esteja vazio.first', () => {
  render(<ValidEmail email="" />);
  const isValidEmail = screen.queryByTestId('id-is-email-valid');
  expect(isValidEmail).not.toBeInTheDocument();
});

test('Testando se o componente possui texto verde ao ser digitado um email válido.', () => {
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={EMAIL_USER} />);
  const isValidEmail = screen.getByTestId('id-is-email-valid');
  expect(isValidEmail).toHaveAttribute('style', 'color: green;');
});

test('Testando se o componente possui texto vermelho ao ser digitado um email inválido.', () => {
  const EMAIL_USER = 'emailerrado';
  render(<ValidEmail email={EMAIL_USER} />);
  const isValidEmail = screen.getByTestId('id-is-email-valid');
  expect(isValidEmail).toHaveAttribute('style', 'color: red;');
});
