import React from 'react'
import ReactDOM from 'react-dom/server'
const config = require('config')
const App = require(`${config.SRC}components/App`).default

module.exports = (state) => {
  return ReactDOM.renderToString(<App {...state} />)
}
