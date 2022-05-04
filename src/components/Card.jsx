import React from 'react';
import styled from 'styled-components';
import { CardStyle, ImageStyle, NameStyle } from './Styles.js';

export default function Card({ recipe, handleCardClick }) {
  let image;
  if (!recipe.photos) {
    image = 'https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png';
  } else {
    image = recipe.photos;
  }
  return (
    <CardStyle onClick={(e) => handleCardClick(e, recipe)}>
      <div>
        <ImageStyle src={image} alt={recipe.name} />
      </div>
      <NameStyle>
        {recipe.name}
      </NameStyle>
    </CardStyle>
  );
}
