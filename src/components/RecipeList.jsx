import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/extensions
import Card from './Card.jsx';

const CardLayout = styled.div`
  display: flex;
  flex-direction: row
  overflow-y: hidden;
`;

export default function RecipeList({ list, handleCardClick }) {
  return (
    <CardLayout>
      {list.map((recipe) => (
        <Card key={recipe.name} recipe={recipe} handleCardClick={handleCardClick} />
      ))}
    </CardLayout>
  );
}
