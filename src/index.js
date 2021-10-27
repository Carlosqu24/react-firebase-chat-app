import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { ContextProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';



ReactDOM.render(
  <ContextProvider>
    <ThemeProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ThemeProvider>
  </ContextProvider>,
  document.getElementById('root')
);


