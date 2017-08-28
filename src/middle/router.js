const store = require('./store')
const getState = require('./store/configure')(store)
const { setPageAction, searchAction } = require('./store/actions')

// -------------------------------------- ssr

const routes = require('./routes')
const Router = require('koa-router')

const router = new Router()

router
  .get('/', async (ctx) => {
    console.log('GET request main template')
    ctx.body = routes.mainContent(getState())
  })

  .get('/index.js', async (ctx) => {
    console.log('GET request for main js bundle')
    ctx.body = routes.bundle()
  })

  .get('/comment/:page', async (ctx) => {
    const page = ctx.params.page
    console.log(`GET request for page ${page}`)
    store.dispatch(setPageAction(page))
    ctx.body = getState()
  })

  .get('/search/:phrase', async (ctx) => {
    const phrase = ctx.params.phrase
    console.log('GET request for %s page', phrase)
    store.dispatch(searchAction(phrase))
    ctx.body = getState()
  })

exports.routes = () => router.routes()
exports.allowedMethods = () => router.allowedMethods()
