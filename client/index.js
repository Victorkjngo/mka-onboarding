import ReactDOM from 'react-dom';
import App from './Components/app.jsx';
import React from 'react';
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), document.getElementById('root'));