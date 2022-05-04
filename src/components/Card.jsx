import React from 'react';
import styled from 'styled-components';

const CardStyle = styled.div`
  border: 1px solid #c72830;
  height: 25vh;
  width: 15vw;
  margin: 1vmin;
  font-size: 2vmin;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  background-color: #white;
  color: #c72830;
`;

const ImageStyle = styled.img`
  max-width: 100%;
  max-height: 100%;
  margin: auto;
`;

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
      <div>
        {recipe.name}
      </div>
    </CardStyle>
  );
}
