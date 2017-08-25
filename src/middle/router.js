const store  = require('./store')
const getState = require('./store/configure')(store)

//-------------------------------------- init

const routes = require('./routes')
const Router = require('koa-router')
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

exports.routes = () => router.routes()
exports.allowedMethods = () => router.allowedMethods()

//-------------------------------------- api

const send = function(ctx, event, data) {
  ctx.broadcast.emit(event, data)
}

exports.socketRoutes = (route) => {
  route('/comment/:page', async () => {
    store.dispatch({type: 'setEntries', page: this.args[0]})
    send( this, 'pageHasChanged', getState() )
  })

  route('/search/:phrase', async () => {
    store.dispatch({type: 'searchEntries'})
    send( this, 'found', getState() )
  })
}
