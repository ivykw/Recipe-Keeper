import React from 'react';
import { createRoot } from 'react-dom/client';
// eslint-disable-next-line import/extensions
import App from './components/App.jsx';

const root = createRoot(document.getElementById('root'));

root.render(<App />);
