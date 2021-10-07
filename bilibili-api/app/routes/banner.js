import Router from 'koa-router'
import axios from 'axios'
import { banner } from './urlConfig.js'

const router = Router()

router.get('/banner', async (ctx, next) => {
  let response = await axios.get(banner)
  ctx.body = response.data
})

export default router