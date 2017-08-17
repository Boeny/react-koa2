module.exports = {
  entry: [
    './client/index.jsx'
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader!postcss-loader',
      },
    ]
  },
  
  devtool: 'source-map',
  
  resolve: {
    extensions: ['.json', '.js', '.jsx']
  },
  
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'index.js'
  }
};
