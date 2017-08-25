const routes = require('./routes')
const Router = require('koa-router')
const store  = require('./store')
const config = require(SRC + 'config')

const getState = require('./store/configure')(store)

const router = new Router()

router
  .get('/', async (ctx) => {
    console.log('GET request main template')
    ctx.body = routes.mainContent( getState() )
  })
  
  .get('/index.js', async (ctx) => {
    console.log('GET request for main js bundle')
    ctx.body = routes.bundle()
  })
  
  .get('/comment/:page', async (ctx) => {
    store.dispatch({type: 'setEntries', page: ctx.params.page})
    ctx.body = getState()
  })
  
  .get('/search/:phrase', async (ctx) => {
    store.dispatch({type: 'searchEntries'})
    ctx.body = getState()
  })

exports.routes = () => router.routes()
exports.allowedMethods = () => router.allowedMethods()
