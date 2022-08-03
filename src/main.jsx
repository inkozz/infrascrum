/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index.css';
import App from './App';
import './assets/sidebar.css';
import './assets/loader.css';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root'),
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
