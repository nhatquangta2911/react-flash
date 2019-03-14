// require('./css/styles.scss');
import 'jquery';
// import 'bulma/css/bulma.css'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faIgloo } from '@fortawesome/free-solid-svg-icons'
// library.add(faIgloo)

window.onload = function () {

  ReactDOM.render(<App />, document.getElementById('root'));

};
