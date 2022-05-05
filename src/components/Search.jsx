import React, { useState } from 'react';
import styled from 'styled-components';
import { MainButton, SearchBar } from './Styles.js';

export default function Search({ handleSearch }) {
  const [input, setInput] = useState('');
  const handleInput = (e) => {
    let searched = e.target.value.toLowerCase();
    setInput(searched);
  };

  const handleSubmit = (e) => {
    handleSearch(e, input);
    setInput('');
  };

  return (
    <SearchBar onSubmit={(e) => handleSubmit(e)}>
      <label style={{color: '#60504f'}}>
        Search:
        <input type="text" onChange={handleInput} value={input} />
      </label>
      <MainButton type="submit">Go!</MainButton>
    </SearchBar>
  );
}
