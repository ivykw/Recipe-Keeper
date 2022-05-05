import styled from 'styled-components';

// Styles for App.jsx
const AppStyle = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 8fr;
  justify-items: center;
  width: 75vw;
  height: 100vh;
  font-family: 'Work Sans', sans-serif;
  background-color: white;
`;
const Banner = styled.h1`
  color: #60504f;
`;

const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  grid-row: 2;
  gap: 5%;
`;

const MainButton = styled.button`
  font-family: 'Work Sans', sans-serif;
  cursor: pointer;
  &:hover {
    background-color: #33855d;
  }
  height: 50%;
  width: 20%;
  color: #60504f;
  background-color: #c7f8e0;
  border: 1px solid #60504f;
`;

const RecipeListStyle = styled.div`
  grid-row: 3;
  width: 90%;
  border: 2px solid #60504f;
  display: flex;
  justify-content: center;
  overflow-y: auto;
  background-color: #c7f8e0;
`;

// Styles for Modal.jsx
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
  overflow-y: scroll;
  background: white;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Work Sans', sans-serif;
  border: 2px solid #60504f;
`;

// Styles for RecipeList.jsx
const CardLayout = styled.div`
  postion: relative;
  top: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 90%;
  height: 80%;
  position: relative;
  background-color: #c7f8e0;
  gap: 5%;
  flex-wrap: wrap;
`;

// Styles for Card.jsx
const CardStyle = styled.div`
  border: 1px solid #60504f;
  height: 40%;
  width: 25%;
  max-width: 25%;
  padding: 0;
  font-size: 2vmin;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  background-color: white;
  color: #60504f;
  overflow: hidden;
  flex-wrap: nowrap;
`;

const ImageStyle = styled.img`
  display: block;
  width: 100%;
  max-width: 200px;
  height: 100%;
  max-height: 170px;
  margin: auto;
  flex-grow: 1;
`;

const NameStyle = styled.div`
  position: relative;
  bottom: 0;
`;

// Styles for RecipeDetails.jsx
const RecipeDetailsStyle = styled.div`
  color: #60504f;
`;

const SectionStyle = styled.div`
  padding: 1em;
`;

// Styles for NewRecipeForm.jsx
const FormStyle = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1%;
`;

const FormTitle = styled.h2`
  font-weight: bold;
  display: flex;
  justify-content: center;
  color: #60504f;
`;

const InputStyle = styled.div`
  padding: 1%;
  color: #60504f;
`;

const TextareaStyle = styled.textarea`
  height: 20em;
  width: 80%;
`;

const ExitButton = styled.button`
  color: #60504f;
  position: fixed;
  right: 0;
  top: 2px;
  font-family: 'Work Sans', sans-serif;
`;

// Search Bar Styles
const SearchBar = styled.form`
display: flex;
flex-direction: row;
gap: 2px;
`;

export {
  AppStyle, Banner, NavBar, MainButton, RecipeListStyle,
};
export { Overlay, ModalStyle };
export { CardLayout };
export { CardStyle, ImageStyle, NameStyle };
export { RecipeDetailsStyle, SectionStyle };
export {
  FormStyle, FormTitle, InputStyle, TextareaStyle, ExitButton,
};
export { SearchBar };
