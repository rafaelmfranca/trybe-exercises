import React from 'react';
import './Button.css';

const Button = ({ className, onClick, disabled }) => (
  <button className={className} onClick={onClick} disabled={disabled}>
    {className}
  </button>
);

export default Button;
