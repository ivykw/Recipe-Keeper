/* eslint-disable react/sort-comp */
/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import Modal from './Modal.jsx';
import RecipeList from './RecipeList.jsx';

const axios = require('axios');

const url = 'http://localhost:3000/recipes';

const AppStyle = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 8fr;
  justify-items: center;
  width: 75vw;
  height: 100vh;
  font-family: 'Work Sans', sans-serif;
  background-color: #white;
  border: 2px solid #3b3f20;
`;
const Banner = styled.h1`
  color: #c72830;
  font-weight: bolder;
`;

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  grid-row: 2;
`;

const AddNewButton = styled.button`
  font-family: 'Work Sans', sans-serif;
  cursor: pointer;
  &:hover {
    background-color: #c72830;
  }
  height: 3em;
  color: #60504f;
  background-color: #f5a7af;
  border: 1px solid #c72830;
`;

const RecipeListStyle = styled.div`
  grid-row: 3;
  width: 90%;
  border: 2px solid #c72830;
  display: flex;
  justify-content: center;
  overflow-y: scroll;
`;

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
    this.handleDeleteButton = this.handleDeleteButton.bind(this);
    this.handleOpenAddModal = this.handleOpenAddModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleCardClick = this.handleCardClick.bind(this);
    this.getAll = this.getAll.bind(this);
  }

  handleAddButton(e, recipe) {
    e.preventDefault();
    axios.post(url, recipe, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    })
      .then(() => {
        this.getAll();
      })
      .catch((err) => {
        console.log('Error posting recipe from client', err);
      });
  }

  handleDeleteButton(e, recipeId) {
    e.preventDefault();
    console.log(recipeId)
    // axios.delete(url, { data: { recipeId } })
    //   .then(() => {
    //     this.getAll();
    //   })
    //   .catch((err) => {
    //     console.log('Error deleting recipe from client', err);
    //   });
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
      showDetailModal: true,
    });
  }

  // on mount, get all recipes
  getAll() {
    axios.get(url)
      .then(({ data }) => {
        this.setState({
          allRecipes: data,
        });
      })
      .catch((err) => { console.log('Error getting recipes from client', err); });
  }

  componentDidMount() {
    this.getAll();
  }

  render() {
    return (
      <AppStyle>
        <Banner>My Recipe Collection</Banner>
        <NavBar>
          <AddNewButton type="button" onClick={this.handleOpenAddModal}>Add New Recipe</AddNewButton>
        </NavBar>
        <Modal
          showAdd={this.state.showAddModal}
          showDetail={this.state.showDetailModal}
          onClose={this.handleCloseModal}
          recipe={this.state.currentView}
          handleAdd={this.handleAddButton}
          handleDelete={this.handleDeleteButton}
        />
        <RecipeListStyle>
          <RecipeList list={this.state.allRecipes} handleCardClick={this.handleCardClick} />
        </RecipeListStyle>
      </AppStyle>
    );
  }
}

export default App;
