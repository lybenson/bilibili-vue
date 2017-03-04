import Router from 'koa-router'
import axios from 'axios'
import { promote, promoteAd } from './urlConfig'

const router = Router()

// 推广
router.get('/promote', async (ctx, next) => {
  let response = await axios.get(promote)
  let ad = await axios.get(promoteAd)
  response.data.promoteAd = ad.data.data
  ctx.body = response.data
})

// 推广
router.get('/promoteAd', async (ctx, next) => {
  let response = await axios.get(promoteAd)
  ctx.body = response.data
})

export default router