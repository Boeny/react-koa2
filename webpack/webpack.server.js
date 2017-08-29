require('babel-core/register')({
  'presets': ['es2015','stage-0','react']
})

const webpack = require('webpack');
const {merge, defaults} = require('./webpack.base')
const fs = require('fs')

require('../src/node_modules/config').SRC = `${__dirname}/../src/`
const {mainContent} = require('../src/middle/routes')

const content = mainContent({
    page: 1,
    pageCount: 2,
    data: [
      {id: 1, name: 'a', email: '1@a.com', body: '---'},
      {id: 2, name: 'b', email: '2@a.com', body: '---'},
      {id: 3, name: 'c', email: '3@a.com', body: '---'},
      {id: 4, name: 'd', email: '4@a.com', body: '---'}
    ]
})

fs.writeFileSync(`${defaults.output.path}/index.html`, content, 'utf-8')

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