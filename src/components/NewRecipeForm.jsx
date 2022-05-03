/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

class NewRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      ingredients: null,
      instructions: null,
      photos: [],
    };
  }

  render() {
    return (
      <>
        <button type="button" onClick={this.props.onClose}>X</button>
        <form>
          <label>
            Recipe Name:
            <input type="text" name="name" />
          </label>
          <label>
            Ingredients:
            <textarea name="ingredients" />
          </label>
          <label>
            Instructions:
            <textarea name="instructions" />
          </label>
          <button type="button">Add Photos</button>
          <button type="submit">Add Recipe</button>
        </form>
      </>
    );
  }
}

export default NewRecipe;
