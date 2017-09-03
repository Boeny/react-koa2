const Router = require('koa-router')
const routes = require('./routes')
const store = require('./store')
const { setData, getData } = require('./store/configure')
const { initAction, setPageAction, searchAction } = require('./store/actions')

const router = new Router()
const dispatch = ::store.dispatch
const getState = () => store.getState().get('viewData')

getData().then((data) => {
  setData(dispatch, initAction)(data)
  dispatch(setPageAction(1))
})

router
  .get('/', async (ctx) => {
    ctx.body = routes.mainContent(getState())
  })

  .get('/favicon.ico', async (ctx) => {
    ctx.body = ''
  })

  .get('/index.js', async (ctx) => {
    ctx.body = routes.bundle()
  })

  .get('/comment/:page', async (ctx) => {
    dispatch(setPageAction(ctx.params.page))
    ctx.body = getState()
  })

  .get('/search/', async (ctx) => {
    dispatch(searchAction('', ['name', 'email']))
    ctx.body = getState()
  })

  .get('/search/:phrase', async (ctx) => {
    dispatch(searchAction(ctx.params.phrase, ['name', 'email']))
    ctx.body = getState()
  })

exports.routes = () => router.routes()
exports.allowedMethods = () => router.allowedMethods()
