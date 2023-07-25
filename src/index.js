import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// TODO: prevent changing previous parts of the story
// TODO: save stories to local storage
// TODO: clear stories
// TODO: delete stories
// TODO: add utils with common functions(?)
