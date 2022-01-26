import React from 'react';
import './Button.css';

const Button = ({ className, onClick }) => (
  <button className={className} onClick={onClick}>
    {className}
  </button>
);

export default Button;
