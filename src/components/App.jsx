/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/sort-comp */

import React from 'react';
import Modal from './Modal.jsx';
import RecipeList from './RecipeList.jsx';
import Search from './Search.jsx';
import Category from './Category.jsx';
import {
  AppStyle, Banner, NavBar, MainButton, RecipeListStyle,
} from './Styles';

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
      showEditModal: false,
      searched: null,
      categories: null,
      selected: null,
    };
    this.handleAddButton = this.handleAddButton.bind(this);
    this.handleDeleteButton = this.handleDeleteButton.bind(this);
    this.handleEditButton = this.handleEditButton.bind(this);
    this.handleEditSubmit = this.handleEditSubmit.bind(this);
    this.handleOpenAddModal = this.handleOpenAddModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleCardClick = this.handleCardClick.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSelected = this.handleSelected.bind(this);
    this.getAll = this.getAll.bind(this);
  }

  getAll() {
    axios.get(url)
      .then(({ data }) => {
        const categories = {};
        for (let i = 0; i < data.length; i += 1) {
          const currentCategory = data[i].category;
          categories[currentCategory] = true;
        }
        this.setState({
          allRecipes: data,
          categories,
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

  handleEditButton(e, recipe) {
    e.preventDefault();
    this.setState({
      showDetailModal: false,
      currentView: recipe,
      showEditModal: true,
    });
  }

  handleEditSubmit(e, recipe) {
    e.preventDefault();
    console.log(recipe)
    axios.put(url, recipe)
      .then(({ data }) => {
        const { allRecipes } = this.state;
        for (let i = 0; i < allRecipes.length; i += 1) {
          const current = allRecipes[i];
          if (current._id === data._id) {
            allRecipes.splice(i, 1, recipe);
            break;
          }
        }
        const { categories } = this.state;
        categories[data.category] = true;
        this.setState({
          allRecipes,
          categories,
        });
      })
      .catch((err) => { console.log('Error updating with edited recipe', err); });
  }

  handleOpenAddModal() {
    this.setState({ showAddModal: true });
  }

  handleCloseModal() {
    this.setState({
      showAddModal: false,
      showDetailModal: false,
      showEditModal: false,
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
    const found = [];
    const recipes = this.state.allRecipes;
    for (let i = 0; i < recipes.length; i += 1) {
      if (recipes[i].name.toLowerCase().includes(search)) {
        found.push(recipes[i]);
      }
    }
    if (found.length > 0) {
      this.setState({
        searched: found,
      });
    }
  }

  handleSelected(category) {
    const selected = [];
    const recipes = this.state.allRecipes;
    for (let i = 0; i < recipes.length; i += 1) {
      if (recipes[i].category === category) {
        selected.push(recipes[i]);
      }
    }
    this.setState({
      selected,
    });
  }

  componentDidMount() {
    this.getAll();
  }

  render() {
    let currentList;
    if (this.state.searched !== null) {
      currentList = this.state.searched;
    } else if (this.state.selected !== null) {
      currentList = this.state.selected;
    } else {
      currentList = this.state.allRecipes;
    }
    return (
      <AppStyle>
        <Banner>My Recipe Collection</Banner>
        <NavBar>
          <MainButton type="button" onClick={() => { this.setState({ searched: null, selected: null }); }}>All Recipes</MainButton>
          <MainButton type="button" onClick={this.handleOpenAddModal}>Add New Recipe</MainButton>
          <label style={{ color: '#60504f' }}>
            View By Category:
            <Category categories={this.state.categories} handleSelected={this.handleSelected} />
          </label>
          <Search handleSearch={this.handleSearch} />
        </NavBar>
        <Modal
          showAdd={this.state.showAddModal}
          showDetail={this.state.showDetailModal}
          showEdit={this.state.showEditModal}
          onClose={this.handleCloseModal}
          recipe={this.state.currentView}
          handleAdd={this.handleAddButton}
          handleDelete={this.handleDeleteButton}
          handleEdit={this.handleEditButton}
          handleEditSubmit={this.handleEditSubmit}
        />
        <RecipeListStyle>
          <RecipeList list={currentList} handleCardClick={this.handleCardClick} />
        </RecipeListStyle>
      </AppStyle>
    );
  }
}

export default App;
