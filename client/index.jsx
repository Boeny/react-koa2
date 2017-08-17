import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import {Provider} from 'react-redux';
import store from '../server/store/store';

require('./style.css');

var db = require('../server/db.json');
var comments = db.comments.filter((row) => row.id < 11);

ReactDOM.render(
  <Provider store={store}>
    <App data={comments}/>
  </Provider>,
  document.getElementById('app')
);