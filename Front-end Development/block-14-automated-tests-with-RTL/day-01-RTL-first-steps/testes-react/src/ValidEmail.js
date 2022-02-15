// ValidEmail.js
import React from 'react';
import PropTypes from 'prop-types';

const verifyEmail = (email) => {
  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
  return emailRegex.test(email);
};

const ValidEmail = (props) => {
  const { email } = props;
  const h3style = {
    color: verifyEmail(email) ? 'green' : 'red',
  };
  return (
    <div>
      <h2 data-testid="id-email-user">{`Valor: ${email}`}</h2>
      {email && (
        <h3 data-testid="id-is-email-valid" style={h3style}>
          {verifyEmail(email) ? 'Email Valido' : 'Email Inválido'}
        </h3>
      )}
    </div>
  );
};

ValidEmail.propTypes = {
  email: PropTypes.string.isRequired,
};

export default ValidEmail;
