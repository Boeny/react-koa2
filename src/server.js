global.SRC = `${__dirname}/`

const Koa = require('koa')
const error = require('./middle/error')
const config = require('./config')
const { routes, allowedMethods, socketRoutes } = require('./middle/router')
const http = require('http')

const app = new Koa()
app.use(error)
app.use(routes())
app.use(allowedMethods())

http
  .createServer(app.callback())
  .listen(config.server.port, () => {
    console.log(`server running on port ${config.server.port}`)
  })
