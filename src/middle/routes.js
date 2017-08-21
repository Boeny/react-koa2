const Router  = require('koa-router')
const router  = new Router()

const readFile = require('../readfile')(__dirname)
const readFileSync = require('../readfilesync')(__dirname)
const layout = require('./layout')
const comment = require('../models/comment')
const app = require('./app')

const content = readFileSync('../templates/index.html')
const js = readFileSync('../../dist/index.js')

router
  .get('/', async (ctx, next) => {
    const state = await comment.getAll(el => el.id < 11)
    ctx.body = layout.replace(content, state, app(state))
  })
  .get('/index.js', async (ctx, next) => {
    ctx.body = js
  })

exports.routes = () => router.routes()
exports.allowedMethods = () => router.allowedMethods()
