import React from 'react'
import ReactDOM from 'react-dom/server'
import {Provider} from 'react-redux'
const App = require(SRC + 'components/App')
const store = require(SRC + 'middle/store')

module.exports = (data) => {
  store.dispatch({type: 'setEntries', data: data})

  ReactDOM.renderToString(
    <Provider store={store}>
      <App />
    </Provider>
  )
}
