import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from "axios";


// axios.interceptors.request.use(config => {
//   config.url = "/api" + config.url;
//   return config;
// })
// axios.interceptors.response.use(({ data }) => {
//   return data;
// })
React.Component.prototype.$axios = axios;

ReactDOM.render(

  <App />,
  document.getElementById('root')
);


