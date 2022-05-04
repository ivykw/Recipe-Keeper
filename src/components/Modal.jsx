import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import NewRecipeForm from './NewRecipeForm.jsx';
import RecipeDetails from './RecipeDetails.jsx';
import { Overlay, ModalStyle } from './Styles.js';

export default function Modal({ showAdd, showDetail, onClose, recipe, handleAdd, handleDelete }) {
  let desiredView;
  if (!showAdd && !showDetail) {
    return null;
  }
  if (showAdd) {
    desiredView = <NewRecipeForm onClose={onClose} handleAdd={handleAdd} />;
  } else {
    desiredView = <RecipeDetails onClose={onClose} recipe={recipe} handleDelete={handleDelete} />;
  }
  return (
    ReactDOM.createPortal(
      <>
        <Overlay />
        <ModalStyle>
          {desiredView}
        </ModalStyle>
      </>,
      document.getElementById('modal-root'),
    )
  );
}
