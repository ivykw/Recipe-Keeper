/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import {
  RecipeDetailsStyle, SectionStyle, ExitButton, MainButton,
} from './Styles';

export default function RecipeDetails({ recipe, onClose, handleDelete }) {
  const handleClick = (event) => {
    if (event.target.style.textDecoration) {
      event.target.style.removeProperty('text-decoration');
    } else {
      event.target.style.setProperty('text-decoration', 'line-through');
    }
  };

  const ingredientsArray = recipe.ingredients.split('\n');
  const ingredients = ingredientsArray.map((ingredient) => (
    <li key={ingredient} onClick={handleClick}>{ingredient}</li>));

  const instructionArray = recipe.instructions.split('\n');
  const instructions = instructionArray.map((instruction) => (
    <li key={instruction} onClick={handleClick}>{instruction}</li>));

  return (
    <RecipeDetailsStyle>
      <ExitButton type="button" onClick={onClose}>X</ExitButton>
      <SectionStyle>
        Recipe:
        <span> </span>
        {recipe.name}
      </SectionStyle>
      <SectionStyle>
        Category:
        <span> </span>
        {recipe.category}
      </SectionStyle>
      <SectionStyle>
        Portions:
        <span> </span>
        {recipe.portions}
      </SectionStyle>
      <SectionStyle>Ingredients</SectionStyle>
      <ul>{ingredients}</ul>
      <SectionStyle>Instructions</SectionStyle>
      <ol>{instructions}</ol>
      <SectionStyle>
        Photos:
        <span> </span>
        <img src={recipe.photos} alt={recipe.name} style={{ maxHeight: '7em', width: 'auto' }} />
      </SectionStyle>
      <SectionStyle>
        <a href={recipe.reference}>Reference</a>
      </SectionStyle>
      <MainButton style={{ position: 'relative', left: '45%', bottom: '5%' }} type="button" onClick={(e) => handleDelete(e, recipe._id)}>Delete Recipe</MainButton>
    </RecipeDetailsStyle>
  );
}
