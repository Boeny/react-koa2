/** @namespace server */

import React from 'react'
import ReactDOM from 'react-dom/server'

const SRC = require('config').SRC

const App = require(`${SRC}components/App`).default

module.exports = state => ReactDOM.renderToString(<App {...state} />)
