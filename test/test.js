const React = require('react');
const ReactDOM = require('react-dom/client');
const App = require('../src/components/App.jsx');
const { assert, expect, should } = require('chai');
const { act } = require('react-dom/test-utils');
const jsdom = require('mocha-jsdom');

global.document = jsdom({
  url: 'http://localhost:3000',
});

let rootContainer;

beforeEach(() => {
  rootContainer = document.createElement('root');
});

afterEach(() => {
  document.body.removeChild(rootContainer);
  rootContainer = null;
});

describe('App Component Testing', () => {
  it('Renders Title', () => {
    act(() => {
      const root = ReactDOM.createRoot(rootContainer);
      // root.render(<App />);
    });
    const banner = rootContainer.querySelector('h1');
    expect(banner.textContent).to.equal('My Recipe Collection');
  });
});