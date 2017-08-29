var path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

var defaults = {
  entry: './src/client/index.jsx',

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.[sl]?[aec]ss$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader!postcss-loader'
      }
    ]
  },

  resolve: {
    extensions: ['.json', '.js', '.jsx'],
    alias: {
      '@': resolve('src')
    }
  },

  output: {
    path: resolve('../dist'),
    publicPath: '/',
    filename: 'index.js'
  }
};

const merge = require('webpack-merge');

exports.defaults = defaults

exports.merge = function(config){
	return merge(defaults, config);
}