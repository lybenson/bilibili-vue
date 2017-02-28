/////////////////MARK:必读////////////////
//后来人，接受这个项目不要迷茫，不要彷徨
//代码逻辑混乱，接口数据有问题，请你坚持下去
//谨记，请勿辱骂前人

import Koa from 'koa';
import http from 'http'
import convert from 'koa-convert'
import logger from 'koa-logger'
import cors from 'koa-cors' //跨域
import bodyParser from 'koa-bodyparser' //请求体JSON解析
import onerror from 'koa-onerror' //错误处理
import resource from 'koa-static' //静态资源托管

import path from 'path'

import routes from './routes'
import config from '../config/config';

 
const app = new Koa();

onerror(app)

app.use(convert(cors()))

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
app.use(routes.routes(), routes.allowedMethods());


app.on('error', (error, ctx) => {
	console.log('奇怪的错误' + JSON.stringify(ctx.onerror))
	console.log('server error:' + error)
})

http.createServer(app.callback()).listen(config.port).on('listening', function () {
	console.log('正在监听端口' + config.port)
})

export default app;

