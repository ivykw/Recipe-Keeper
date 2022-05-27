/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { FormStyle, FormTitle, InputStyle, TextareaStyle, MainButton, ExitButton } from './Styles.js';

class NewRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.recipe.name || null,
      category: this.props.recipe.category || null,
      portions: this.props.recipe.portions || null,
      ingredients: this.props.recipe.ingredients || null,
      instructions: this.props.recipe.instructions || null,
      reference: this.props.recipe.reference || null,
      photos: this.props.recipe.photos || null,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleInputChange(event) {
    const { target } = event;
    const { value } = target;
    const { name } = target;
    this.setState({
      [name]: value,
    });
  }

  handleFormSubmit(e) {
    e.preventDefault();
    if (this.props.recipe) {
      this.props.handleEditSubmit(e, this.state);
    } else {
      this.props.handleAdd(e, this.state);
    }
    this.props.onClose();
  }

  render() {
    let title;
    let button;
    if (this.props.recipe) {
      title = <FormTitle>Edit Recipe</FormTitle>;
      button = <MainButton style={{ position: 'relative', left: '45%' }} type="submit">Edit Recipe</MainButton>;
    } else {
      title = <FormTitle>Add Recipe</FormTitle>;
      button = <MainButton style={{ position: 'relative', left: '45%' }} type="submit">Add Recipe</MainButton>;
    }
    return (
      <>
        <ExitButton type="button" onClick={this.props.onClose}>X</ExitButton>
        {title}
        <FormStyle>
          <form onSubmit={this.handleFormSubmit}>
            <InputStyle style={{ gridRow: '1' }}>
              <label>
                <div>Recipe Name:</div>
                <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} required />
              </label>
            </InputStyle>
            <InputStyle style={{ gridRow: '2' }}>
              <label>
                <div>Category:</div>
                <input type="text" name="category" value={this.state.category} onChange={this.handleInputChange} required />
              </label>
            </InputStyle>
            <InputStyle style={{ gridRow: '2' }}>
              <label>
                <div>Portions:</div>
                <input type="text" name="portions" value={this.state.portions} onChange={this.handleInputChange} required />
              </label>
            </InputStyle>
            <InputStyle style={{ gridRow: '3' }}>
              <label>
                <div>Ingredients:</div>
                <TextareaStyle name="ingredients" value={this.state.ingredients} onChange={this.handleInputChange} required />
              </label>
            </InputStyle>
            <InputStyle>
              <label>
                <div>Instructions:</div>
                <TextareaStyle name="instructions" value={this.state.instructions} onChange={this.handleInputChange} required />
              </label>
            </InputStyle>
            <InputStyle>
              <label>
                <div>Reference:</div>
                <input type="text" name="reference" value={this.state.reference} onChange={this.handleInputChange} />
              </label>
            </InputStyle>
            <InputStyle>
              <label>
                <div>Photo URL:</div>
                <input type="text" name="photos" value={this.state.photos} onChange={this.handleInputChange} />
              </label>
            </InputStyle>
            <InputStyle>
              {button}
            </InputStyle>
          </form>
        </FormStyle>
      </>
    );
  }
}

export default NewRecipe;
