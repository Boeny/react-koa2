const layout     = require('./layout')
const Comment    = require(SRC + '/models/comment')
const app        = require('./app')
const indexRoute = require('./routes')// предзагрузка index.html, index.js
const Router     = require('koa-router')
const store      = require('./store')

require('./store/configure')(store)

Comment.store = store;
const router = new Router()

router
  .get('/', async (ctx, next) => {
    const state = Comment.getAll(el => el.id < 11)
    ctx.body = layout.replace(indexRoute.getContent(), state, app(state))
  })
  .get('/index.js', async (ctx, next) => {
    ctx.body = indexRoute.getJS()
  })

exports.routes = () => router.routes()
exports.allowedMethods = () => router.allowedMethods()
