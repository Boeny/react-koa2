import React from 'react'
import ReactDOM from 'react-dom/server'
const App = require(SRC + 'components/App').default

module.exports = (state) => {
  return ReactDOM.renderToString(<App {...state} />)
}
