import Router from 'koa-router'
import axios from 'axios'
import { promote, promoteAd } from './urlConfig.js'

const router = Router()

// 推广
router.get('/promote', async (ctx, next) => {
  const response = await axios.get(promote)
  const ad = await axios.get(promoteAd)
  response.data.promoteAd = ad.data.data
  ctx.body = response.data
})

// 推广
router.get('/promoteAd', async (ctx, next) => {
  const response = await axios.get(promoteAd)
  ctx.body = response.data
})

export default router
