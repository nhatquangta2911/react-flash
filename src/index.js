require('./css/styles.scss');
import 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';

window.onload = function () {

  ReactDOM.render(<App />, document.getElementById('root'));

};
