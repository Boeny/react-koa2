global.SRC = __dirname + '/';

const Koa    = require('koa')
const error  = require('./middle/error')
const config = require('./config')
const {routes, allowedMethods, socketRoutes} = require('./middle/router')

const koa = require('koa.io');
const server = koa();

server.use(error)
server.use(routes())
server.use(allowedMethods())

socketRoutes(server.io.route)// router for socket event

server.listen(config.server.port);