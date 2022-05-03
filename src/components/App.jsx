/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import Modal from './Modal.jsx';
import RecipeList from './RecipeList.jsx';

const axios = require('axios');

const AppStyle = styled.div`
  display: grid;
  grid-template-rows: 2fr 1fr auto;
  justify-items: center;
  width: 65vw
`;
const Banner = styled.h1`
  grid-row: 1
`;

const NavBar = styled.div`
  display: flex;
  flex-direction: row
`;

const testData = [
  {
    name: 'Chocolate Chip Cookies',
    category: 'Dessert',
    ingredients: 'test\ntesting is test\ntest',
    instructions: 'test\ntesting is test\ntest',
  },
  {
    name: 'test2',
    ingredients: 'test\ntesting is test\ntest',
    instructions: 'test\ntesting is test\ntest',
  },
];
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allRecipes: null,
      currentView: null,
      showAddModal: false,
      showDetailModal: false,
    };
    this.handleAddButton = this.handleAddButton.bind(this);
    this.handleOpenAddModal = this.handleOpenAddModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleCardClick = this.handleCardClick.bind(this);
  }

  handleAddButton(event, recipe) {
    // handle post request for form data
  }

  handleOpenAddModal() {
    this.setState({ showAddModal: true });
  }

  handleCloseModal() {
    this.setState({
      showAddModal: false,
      showDetailModal: false,
    });
  }

  handleCardClick(e, recipe) {
    e.preventDefault();
    this.setState({
      currentView: recipe,
      showDetailModal: true });
  }

  render() {
    return (
      <AppStyle>
        <Banner>My Recipe Collection</Banner>
        <NavBar>
          <button type="button" onClick={this.handleOpenAddModal}>Add New Recipe</button>
        </NavBar>
        <Modal
          showAdd={this.state.showAddModal}
          showDetail={this.state.showDetailModal}
          onClose={this.handleCloseModal}
          recipe={this.state.currentView}
        />
        <RecipeList list={testData} handleCardClick={this.handleCardClick} />
      </AppStyle>
    );
  }
}

export default App;
