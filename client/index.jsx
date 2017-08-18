import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

import {Provider} from 'react-redux'
import store from './store'

require('./style.css')
store.dispatch({type: 'setEntries', data: require('../server/db.json').comments.filter(c => c.id < 11)});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
