import React from 'react'
import ReactDOM from 'react-dom'
import App from '../components/App'
import {Provider} from 'react-redux'
import store from '../middle/store'

require('./style.css')

store.dispatch({type: 'setEntries', data: INITIAL_STATE})

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
