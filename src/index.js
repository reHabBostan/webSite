import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
import './index.css';
// import { store } from './store';
import App from './App';

const rootElem = document.getElementById('root');

if (rootElem) {
  const root = ReactDOM.createRoot(rootElem);
  root.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );
}
