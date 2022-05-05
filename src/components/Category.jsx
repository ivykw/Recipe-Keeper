import React, {useState} from 'react';

export default function Category({ categories, handleSelected }) {
  if (!categories) {
    return null;
  }
  const categoryArray = Object.keys(categories).sort();
  const options = categoryArray.map((category) => (
    <option key={category} value={category}>
      {category}
    </option>
  ));

  const handleChoice = (e) => {
    const selected = e.target.value;
    handleSelected(selected);
  };

  return (
    <select value="Category" style={{height: '30%'}} onChange={handleChoice}>
      <option defaultValue="none" disabled hidden>Category</option>
      {options}
    </select>
  );
}
