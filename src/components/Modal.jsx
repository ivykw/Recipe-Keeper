import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import NewRecipeForm from './NewRecipeForm.jsx';
import RecipeDetails from './RecipeDetails.jsx';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
`;
const ModalStyle = styled.div`
  position: fixed;
  width: 40vw;
  height: 70vh;
  overflow-y: hidden;
  background: white;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export default function Modal({ showAdd, showDetail, onClose, recipe, handleAdd }) {
  let desiredView;
  if (!showAdd && !showDetail) {
    return null;
  }
  if (showAdd) {
    desiredView = <NewRecipeForm onClose={onClose} handleAdd={handleAdd} />;
  } else {
    desiredView = <RecipeDetails onClose={onClose} recipe={recipe} />;
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
