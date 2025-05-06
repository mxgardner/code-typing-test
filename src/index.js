// Import the core React library 
import React from 'react';

// Import ReactDOM for rendering into the DOM
import ReactDOM from 'react-dom/client';

// Import global CSS styles 
import './index.css';

// Import the main App component (the root of the app)
import App from './App';

// Create a root element using React 18's new createRoot API
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render App component into the root div from the <div id="root"> in public/index.html.
root.render(
  // React.StrictMode helps catch bugs and warnings in development.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);