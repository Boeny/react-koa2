const routes = require('./routes')
const Router = require('koa-router')
const store  = require('./store')

require('./store/configure')(store)

Comment.store = store;
const router = new Router()

router
  .get('/', async (ctx, next) => {
    ctx.body = routes.template()
  })
  .get('/index.js', async (ctx, next) => {
    ctx.body = routes.js()
  })
  .get('/post/:id/comments/:page', async (ctx, next) => {
      let postId = +ctx.params.id;
      let page = ctx.params.page || 1;
      let start = (page - 1) * 10 + 1
      let end = start + 10
      
      ctx.body = Comment.getAll(el => el.postId === postId && el.id > start && el.id < end)
  })
  .get('/post/search/:phrase', koaBody, async (ctx, next) => {
      ctx.body = await product.create(ctx.params.phrase)
  })

exports.routes = () => router.routes()
exports.allowedMethods = () => router.allowedMethods()
