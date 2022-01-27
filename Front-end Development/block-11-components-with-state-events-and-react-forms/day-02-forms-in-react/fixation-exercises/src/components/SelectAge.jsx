import React from 'react';

const SelectAge = ({ value, onChange }) => {
  return (
    <label htmlFor="age">
      Idade:
      <select id="age" name="age" onChange={onChange} value={value}>
        <option value="">Selecione</option>
        <option value="adult">Maior que 18</option>
        <option value="underage">Menor que 18</option>
      </select>
    </label>
  );
};

export default SelectAge;
