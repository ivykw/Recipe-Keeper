/* eslint-disable no-undef */
/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom';
import NewRecipeForm from './NewRecipeForm.jsx';
import RecipeDetails from './RecipeDetails.jsx';
import { Overlay, ModalStyle } from './Styles.js';

export default function Modal({
  showAdd,
  showDetail, showEdit, onClose, recipe, handleAdd, handleDelete, handleEdit, handleEditSubmit,
}) {
  let desiredView;
  if (!showAdd && !showDetail && !showEdit) {
    return null;
  }
  if (showAdd) {
    desiredView = <NewRecipeForm onClose={onClose} handleAdd={handleAdd} />;
  } else if (showDetail) {
    desiredView = (
      <RecipeDetails
        onClose={onClose}
        recipe={recipe}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    );
  } else {
    desiredView = (
      <NewRecipeForm
        onClose={onClose}
        handleEdit={handleEdit}
        handleEditSubmit={handleEditSubmit}
        recipe={recipe}
      />
    );
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
