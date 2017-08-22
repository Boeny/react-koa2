const layout  = require(SRC + 'middle/layout')
const app     = require(SRC + 'middle/app')
const Comment = require(SRC + 'models/comment')
const prepare = require('./prepare')// предзагрузка index.html, index.js

module.exports = () => {
  const state = Comment.getAll(el => el.id < 11)
  layout.replace(prepare.getContent(), state, app(state))
}