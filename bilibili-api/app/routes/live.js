import Router from 'koa-router'
import axios from 'axios'
import { liveXhr } from './urlConfig'

const router = Router()

// 直播
router.get('/live', async (ctx, next) => {
  let response = await axios.get(liveXhr)
  let data = response.data
  let result = data.substr(1).substr(0, data.length - 3)
  ctx.body = JSON.parse(result)
})

export default router