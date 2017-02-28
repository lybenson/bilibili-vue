import Router from 'koa-router'
import axios from 'axios'
import { ding } from './urlConfig'

const router = Router()

// 主内容
router.get('/ding', async (ctx, next) => {
  let response = await axios.get(ding)
  ctx.body = response.data
})

export default router