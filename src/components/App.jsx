import React from 'react';
// eslint-disable-next-line import/extensions
import Modal from './Modal.jsx';

const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allRecipes: null,
      currentView: null,
      showModal: false,
    };
    this.handleAddButton = this.handleAddButton.bind(this);
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleAddButton() {
    // handle post request for form data
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <>
        <div>Hi!</div>
        <button type="button" onClick={this.handleOpenModal}>Add New Recipe</button>
        <Modal show={this.state.showModal} onClose={this.state.handleCloseModal} />
      </>
    );
  }
}

export default App;
