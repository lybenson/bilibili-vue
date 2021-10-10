import Router from 'koa-router'
import banner from './banner.js'
import ding from './ding.js'
import extra from './extra.js'
import live from './live.js'
import promote from './promote.js'
import rank from './rank.js'

const router = Router()

// routes表示的是路由的嵌套处理
router.use(banner.routes(), banner.allowedMethods())
router.use(ding.routes(), ding.allowedMethods())
router.use(extra.routes(), extra.allowedMethods())
router.use(live.routes(), live.allowedMethods())
router.use(promote.routes(), promote.allowedMethods())
router.use(rank.routes(), rank.allowedMethods())

export default router
