import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import App from './components/App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
const promise = axios.get('https://restcountries.eu/rest/v2/all')
console.log(promise)
