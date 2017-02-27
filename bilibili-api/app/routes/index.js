import Router from 'koa-router'

import banner from './banner'


const router = Router()

// koa-router 支持中间件来处理路由的 通过use方法注册中间件

// 任何路由都会匹配此中间件  并通过next传递给下一个
router.use(async (ctx, next) => {
	await next()
})

// 根据请求方法匹配中间件
// router.get().post()

// routes表示的是路由的嵌套处理
router.use(banner.routes(), account.allowedMethods())

export default router

