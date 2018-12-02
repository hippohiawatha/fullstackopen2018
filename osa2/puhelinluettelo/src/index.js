import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import App from './App.js';

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
const promise = axios.get('http://localhost:3001/api/persons')
console.log(promise)
