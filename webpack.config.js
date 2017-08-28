var path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  entry: [
    './src/client/index.jsx'
  ],
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

  devtool: 'source-map',

  resolve: {
    extensions: ['.json', '.js', '.jsx'],
    alias: {
      '@': resolve('src')
    }
  },

  output: {
    path: resolve('dist'),
    publicPath: '/',
    filename: 'index.js'
  }
}
