/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

export default function RecipeDetails({ recipe, onClose }) {
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
    <>
      <button type="button" onClick={onClose}>X</button>
      <div>
        Recipe:
        {recipe.name}
      </div>
      <div>
        Category:
        {recipe.category}
      </div>
      <div>Ingredients</div>
      <ul>{ingredients}</ul>
      <div>Instructions</div>
      <ol>{instructions}</ol>
      <div>Photos</div>
      <div>
        Reference:
        {recipe.reference}
      </div>
    </>
  );
}
