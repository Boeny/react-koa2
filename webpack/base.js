/** @namespace webpack */
/** @module webpack/base */

const path = require('path')
const merge = require('webpack-merge')

function resolve (dir) {
  return path.join(__dirname, dir)
}

/**
 * The base config
 * @type {Object}
 */
exports.defaults = {
  // source index file in the client folder
  entry: './src/client/index.jsx',

  module: {
    loaders: [
      {// js and jsx files loader
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {// css files loader
        test: /\.[sl]?[aec]ss$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader!postcss-loader'
      }
    ]
  },

  resolve: {
    // allowing to require this files without extentions
    extensions: ['.json', '.js', '.jsx']
  },

  output: {
    // output bundle file in the destination client folder
    path: resolve('../dist'),
    publicPath: '/',
    filename: 'index.js'
  }
}

/**
 * merges the base config with additional rules
 * @returns {Object} result config
 */
exports.merge = config => merge(exports.defaults, config)
