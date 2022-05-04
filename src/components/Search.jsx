import React, { useState } from 'react';
import styled from 'styled-components';
import { MainButton } from './Styles.js';

export default function Search({ handleSearch }) {
  const [input, setInput] = useState('');
  const handleInput = (e) => {
    let searched = e.target.value.toLowerCase();
    setInput(searched);
  };

  const SearchBar = styled.form`
    display: flex;
    flex-direction: row;
    gap: 2px;
  `;

  return (
    <SearchBar onSubmit={(e) => handleSearch(e, input)}>
      <label style={{color: '#c72830'}}>
        Search:
        <input type="text" onChange={handleInput} />
      </label>
      <MainButton type="submit">Go!</MainButton>
    </SearchBar>
  );
}
