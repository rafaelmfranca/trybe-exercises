import React from 'react';

const InputName = ({ value, onChange }) => {
  return (
    <label htmlFor="name">
      Nome:
      <input
        id="name"
        name="name"
        type="text"
        onChange={onChange}
        value={value}
      />
    </label>
  );
};

export default InputName;
