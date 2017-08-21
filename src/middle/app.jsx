import React from 'react'
import ReactDOM from 'react-dom/server'
import {Provider} from 'react-redux'
import App from '../components/App'
import store from './store'

module.exports = (data) => {
  store.dispatch({type: 'setEntries', data: data})

  ReactDOM.renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  )
}
