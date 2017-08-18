const Uglify = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: [
    './client/index.jsx'
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

  plugins: [
    //new Uglify()
  ],

  devtool: 'source-map',

  resolve: {
    extensions: ['.json', '.js', '.jsx']
  },

  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'index.min.js'
  }
}
