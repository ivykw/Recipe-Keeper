/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { FormStyle, FormTitle, InputStyle, TextareaStyle, MainButton, ExitButton } from './Styles.js';

class NewRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      category: null,
      portions: null,
      ingredients: null,
      instructions: null,
      reference: null,
      photos: null,
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
    this.props.handleAdd(e, this.state);
    this.props.onClose();
  }

  render() {
    return (
      <>
        <ExitButton type="button" onClick={this.props.onClose}>X</ExitButton>
        <FormTitle>Add Recipe</FormTitle>
        <FormStyle>
          <form onSubmit={this.handleFormSubmit}>
            <InputStyle style={{ gridRow: '1' }}>
              <label>
                <div>Recipe Name:</div>
                <input type="text" name="name" onChange={this.handleInputChange} required />
              </label>
            </InputStyle>
            <InputStyle style={{ gridRow: '2' }}>
              <label>
                <div>Category:</div>
                <input type="text" name="category" onChange={this.handleInputChange} required />
              </label>
            </InputStyle>
            <InputStyle style={{ gridRow: '2' }}>
              <label>
                <div>Portions:</div>
                <input type="text" name="portions" onChange={this.handleInputChange} required />
              </label>
            </InputStyle>
            <InputStyle style={{ gridRow: '3' }}>
              <label>
                <div>Ingredients:</div>
                <TextareaStyle name="ingredients" onChange={this.handleInputChange} required />
              </label>
            </InputStyle>
            <InputStyle>
              <label>
                <div>Instructions:</div>
                <TextareaStyle name="instructions" onChange={this.handleInputChange} required />
              </label>
            </InputStyle>
            <InputStyle>
              <label>
                <div>Reference:</div>
                <input type="text" name="reference" onChange={this.handleInputChange} />
              </label>
            </InputStyle>
            <InputStyle>
              <label>
                <div>Photo URL:</div>
                <input type="text" name="photos" onChange={this.handleInputChange} />
              </label>
            </InputStyle>
            <InputStyle>
              <MainButton style={{ position: 'relative', left: '45%' }} type="submit">Add Recipe</MainButton>
            </InputStyle>
          </form>
        </FormStyle>
      </>
    );
  }
}

export default NewRecipe;
