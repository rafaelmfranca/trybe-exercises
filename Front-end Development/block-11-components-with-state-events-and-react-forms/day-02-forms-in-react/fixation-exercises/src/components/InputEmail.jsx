import React from 'react';

const InputEmail = ({ value, onChange }) => {
  return (
    <label htmlFor="email">
      Email:
      <input
        id="email"
        name="email"
        type="email"
        onChange={onChange}
        value={value}
      />
    </label>
  );
};

export default InputEmail;
