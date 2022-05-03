import React from 'react';
import styled from 'styled-components';

const CardStyle = styled.div`

`;

export default function Card({ recipe, handleCardClick }) {
  let image;
  if (!recipe.url) {
    image = 'https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png';
  } else {
    image = recipe.url;
  }
  return (
    <CardStyle onClick={(e) => handleCardClick(e, recipe)}>
      <div>
        <img src={image} alt={recipe.name} />
      </div>
      <div>
        {recipe.name}
      </div>
    </CardStyle>
  );
}
