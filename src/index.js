import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from "axios";
import { BrowserRouter as Router } from "react-router-dom"


React.Component.prototype.$axios = axios;

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);


