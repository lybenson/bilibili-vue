import Router from 'koa-router'
import axios from 'axios'
import { live } from './urlConfig'

const router = Router()

// 直播
router.get('/live', async (ctx, next) => {
  let response = await axios.get(live)
  ctx.body = response.data
})

export default router