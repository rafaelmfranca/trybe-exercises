import React from 'react';

const TextAreaAnecdote = ({ value, onChange }) => {
  return (
    <label htmlFor="anecdote">
      Anedota:
      <textarea
        id="anecdote"
        name="anecdote"
        onChange={onChange}
        value={value}
      />
    </label>
  );
};

export default TextAreaAnecdote;
