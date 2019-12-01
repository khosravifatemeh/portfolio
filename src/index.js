import React from 'react';
import ReactDOM from 'react-dom';
import Home from './routes/home';
import './assets/fonts/css/fontiran.css'
import './assets/css/main.css'
import './assets/fonts/css/fontiran.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import $ from 'jquery'
import popper from 'popper.js'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Home />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
