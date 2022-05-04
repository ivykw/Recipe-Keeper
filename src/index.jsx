import React from 'react';
import { createRoot } from 'react-dom/client';
import styled from 'styled-components';
// eslint-disable-next-line import/extensions
import App from './components/App.jsx';

const PageStyle = styled.div`
  display: grid;
  justify-items: center;
  background-color: white;
`;

const root = createRoot(document.getElementById('root'));

root.render(
  <PageStyle>
    <App />
  </PageStyle>,
);
