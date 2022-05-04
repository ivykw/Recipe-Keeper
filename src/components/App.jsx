/* eslint-disable react/sort-comp */
/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import Modal from './Modal.jsx';
import RecipeList from './RecipeList.jsx';
import Search from './Search.jsx';
import { AppStyle, Banner, NavBar, MainButton, RecipeListStyle } from './Styles.js';

const axios = require('axios');

const url = 'http://localhost:3000/recipes';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allRecipes: null,
      currentView: null,
      showAddModal: false,
      showDetailModal: false,
      searched: null,
    };
    this.handleAddButton = this.handleAddButton.bind(this);
    this.handleDeleteButton = this.handleDeleteButton.bind(this);
    this.handleOpenAddModal = this.handleOpenAddModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleCardClick = this.handleCardClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.getAll = this.getAll.bind(this);
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
    this.handleCloseModal();
    axios.delete(url, { data: { recipeId } })
      .then(() => {
        this.getAll();
      })
      .catch((err) => {
        console.log('Error deleting recipe from client', err);
      });
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

  handleSearch(e, search) {
    e.preventDefault();
    let found = [];
    let recipes = this.state.allRecipes;
    // iterate over all recipes
    for (let i = 0; i < recipes.length; i++) {
      // if they contain search
      if (recipes[i].name.toLowerCase().includes(search)) {
        found.push(recipes[i]);
      }
    }
    // push into array
    if (found.length > 0) {
      this.setState({
        searched: found,
      });
    }
  }

  componentDidMount() {
    this.getAll();
  }

  render() {
    let currentList;
    if (this.state.searched !== null) {
      currentList = this.state.searched;
    } else {
      currentList = this.state.allRecipes;
    }
    return (
      <AppStyle>
        <Banner>My Recipe Collection</Banner>
        <NavBar>
          <MainButton type="button" onClick={() => {this.setState({ searched: null })}}>All Recipes</MainButton>
          <MainButton type="button" onClick={this.handleOpenAddModal}>Add New Recipe</MainButton>
          <Search handleSearch={this.handleSearch} />
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
          <RecipeList list={currentList} handleCardClick={this.handleCardClick} />
        </RecipeListStyle>
      </AppStyle>
    );
  }
}

export default App;
