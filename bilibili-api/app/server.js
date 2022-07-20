import Koa from 'koa'
import http from 'http'
import convert from 'koa-convert'
import logger from 'koa-logger'
import cors from 'koa-cors' // 跨域
import bodyParser from 'koa-bodyparser' // 请求体JSON解析
import onerror from 'koa-onerror' // 错误处理
import resource from 'koa-static' // 静态资源托管

import path, { dirname } from 'path'

import routes from './routes/index.js'
import config from '../config/config.js'

import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const app = new Koa()

onerror(app)

app.use(cors())

app.use(convert(logger()))

app.use(bodyParser())

app.use(resource(path.join(__dirname, '../public')))
// app.use(json({ pretty: false, param: 'pretty' }))

app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(routes.routes(), routes.allowedMethods())

app.on('error', (error, ctx) => {
  console.log('奇怪的错误' + JSON.stringify(ctx.onerror))
  console.log('server error:' + error)
})

http.createServer(app.callback()).listen(config.port).on('listening', function () {
  console.log('正在监听端口' + config.port)
})

export default app
