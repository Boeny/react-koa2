const {merge} = require('./webpack.base')

module.exports = merge({
  watch: true,
  devtool: 'source-map'
});