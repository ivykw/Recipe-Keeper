/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import styled from 'styled-components';
import { RecipeDetailsStyle, SectionStyle, ExitButton, MainButton } from './Styles.js';

export default function RecipeDetails({ recipe, onClose, handleDelete }) {
  const handleClick = (event) => {
    if (event.target.style.textDecoration) {
      event.target.style.removeProperty('text-decoration');
    } else {
      event.target.style.setProperty('text-decoration', 'line-through');
    }
  };

  const ingredientsArray = recipe.ingredients.split('\n');
  const ingredients = ingredientsArray.map((ingredient) =>
    <li key={ingredient} onClick={handleClick}>{ingredient}</li>);

  const instructionArray = recipe.instructions.split('\n');
  const instructions = instructionArray.map((instruction) =>
    <li key={instruction} onClick={handleClick}>{instruction}</li>);

  return (
    <RecipeDetailsStyle>
      <ExitButton type="button" onClick={onClose}>X</ExitButton>
      <SectionStyle>
        Recipe:
        {recipe.name}
      </SectionStyle>
      <SectionStyle>
        Category:
        {recipe.category}
      </SectionStyle>
      <SectionStyle>
        Portions:
        {recipe.portions}
      </SectionStyle>
      <SectionStyle>Ingredients</SectionStyle>
      <ul>{ingredients}</ul>
      <SectionStyle>Instructions</SectionStyle>
      <ol>{instructions}</ol>
      <SectionStyle>
        Photos:
        <img src={recipe.photos} alt={recipe.name} style={{ maxHeight: '7em', width: 'auto' }} />
      </SectionStyle>
      <SectionStyle>
        <a href={recipe.reference}>Reference</a>
      </SectionStyle>
      <MainButton type="button" onClick={(e) => handleDelete(e, recipe._id)}>Delete Recipe</MainButton>
    </RecipeDetailsStyle>
  );
}
