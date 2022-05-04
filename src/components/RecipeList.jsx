import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/extensions
import Card from './Card.jsx';

const CardLayout = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  height: 80%;
  position: relative;
  background-color: white;
`;

export default function RecipeList({ list, handleCardClick }) {
  if (list === null) {
    return <div>Add recipes to your list!</div>;
  }
  return (
    <CardLayout>
      {list.map((recipe) => (
        <Card key={recipe.name} recipe={recipe} handleCardClick={handleCardClick} />
      ))}
    </CardLayout>
  );
}
