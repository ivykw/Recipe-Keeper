/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { MainButton, SearchBar } from './Styles';

export default function Search({ handleSearch }) {
  const [input, setInput] = useState('');
  const handleInput = (e) => {
    const searched = e.target.value.toLowerCase();
    setInput(searched);
  };

  const handleSubmit = (e) => {
    handleSearch(e, input);
    setInput('');
  };

  return (
    <SearchBar onSubmit={(e) => handleSubmit(e)}>
      <label style={{ color: '#60504f' }}>
        Search:
        <input type="text" onChange={handleInput} value={input} />
      </label>
      <MainButton type="submit">Go!</MainButton>
    </SearchBar>
  );
}
