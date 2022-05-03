import React from 'react';

export default function RecipeDetails({ recipe }) {
  const ingredientsArray = recipe.ingredients.split('\n');
  const ingredients = ingredientsArray.map((ingredient) =>
    <li>{ingredient}</li>
  );
  const instructionArray = recipe.instructions.split('\n');
  const instructions = instructionArray.map((instruction) =>
    <li>{instruction}</li>
  );
  return (
    <>
      <div>Recipe: {recipe.name}</div>
      <div>Category: {recipe.category}</div>
      <div>Ingredients</div>
      <ol>{ingredients}</ol>
      <div>Instructions</div>
      <ol>{instructions}</ol>
    </>
  );
}
