import React from 'react';

const CheckboxTerms = ({ value, onChange }) => {
  return (
    <label htmlFor="terms">
      <input
        id="terms"
        type="checkbox"
        name="terms"
        onChange={onChange}
        checked={value}
      />
      Concordo com termos e acordos
    </label>
  );
};

export default CheckboxTerms;
