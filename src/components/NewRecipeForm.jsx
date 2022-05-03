/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styled from 'styled-components';

const FormStyle = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 3fr 3fr 1fr 1fr;
`;

class NewRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: null,
      category: null,
      ingredients: null,
      instructions: null,
      photos: [],
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

  handleFormSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <>
        <button type="button" onClick={this.props.onClose}>X</button>
        <FormStyle>
          <form onSubmit={this.handleFormSubmit}>
            <div style={{ gridRow: '1' }}>
              <label>
                Recipe Name:
                <input type="text" name="name" onChange={this.handleInputChange} />
              </label>
            </div>
            <div style={{ gridRow: '2' }}>
              <label>
                Category:
                <input type="text" name="category" onChange={this.handleInputChange} />
              </label>
            </div>
            <div style={{ gridRow: '3' }}>
              <label>
                Ingredients:
                <textarea name="ingredients" onChange={this.handleInputChange} />
              </label>
            </div>
            <div>
              <label>
                Instructions:
                <textarea name="instructions" onChange={this.handleInputChange} />
              </label>
            </div>
            <div>
              <button type="button">Add Photos</button>
            </div>
            <div>
              <button type="submit">Add Recipe</button>
            </div>
          </form>
        </FormStyle>
      </>
    );
  }
}

export default NewRecipe;
