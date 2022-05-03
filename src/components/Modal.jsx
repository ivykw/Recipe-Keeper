import React from 'react';
import ReactDOM from 'react-dom';
import NewRecipeForm from './NewRecipeForm.jsx';

export default function Modal({ show, onClose }) {
  if (!show) {
    return null;
  }
  return (
    ReactDOM.createPortal(
      <NewRecipeForm onClose={onClose} />,
      document.getElementById('add-modal-root'),
    )
  );
}
