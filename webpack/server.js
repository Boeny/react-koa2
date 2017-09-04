/** @namespace webpack */
/** @module webpack/devServer */

// preparing the babel for the server side rendering
require('babel-core/register')({
  presets: ['es2015', 'stage-0', 'react']
})

const fs = require('fs')

// preparing the SRC path in the src/config file for the layout and app files
const SRC = `${__dirname}/../src/`
const config = require(`${SRC}config`)
config.SRC = SRC

// getting the layout and app to render the index.html
const { mainContent } = require(`${SRC}middle/routes`)

// rendering the index.html by initial state
const content = mainContent({
  page: 1,
  pageCount: 2,
  data: [
    { id: 1, name: 'a', email: '1@a.com', body: '---' },
    { id: 2, name: 'b', email: '2@a.com', body: '---' },
    { id: 3, name: 'c', email: '3@a.com', body: '---' },
    { id: 4, name: 'd', email: '4@a.com', body: '---' }
  ]
})

const { merge, defaults } = require('./base')
const webpack = require('webpack')

// saving the result to the file
fs.writeFileSync(`${defaults.output.path}/index.html`, content, 'utf-8')

/**
 * Adds dev server config with hot module replacement
 * @type {Object}
 */
module.exports = merge({
  devServer: {
    port: 80,
    contentBase: './dist',
    hot: true
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
})
