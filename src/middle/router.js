const routes = require('./routes')
const Router = require('koa-router')
const store  = require('./store')
const config = require(SRC + 'config')

require('./store/configure')(store)

const router = new Router()

router
  .get('/', async (ctx) => {
    ctx.body = routes.mainContent()
  })
  
  .get('/index.js', async (ctx) => {
    ctx.body = routes.bundle()
  })
  
  .get('/comment/:page', async (ctx) => {
    store.dispatch({type: 'setEntries', page: ctx.params.page))
    ctx.body = store.getState().toObject()
  })
  
  .get('/search/:phrase', async (ctx) => {
    store.dispatch({type: 'searchEntries'})
    ctx.body = store.getState().toObject()
  })

exports.routes = () => router.routes()
exports.allowedMethods = () => router.allowedMethods()
