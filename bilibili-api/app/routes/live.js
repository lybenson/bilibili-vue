import Router from 'koa-router'
import axios from 'axios'
import { liveXhr } from './urlConfig'

const router = Router()

// 直播
router.get('/live', async (ctx, next) => {
	console.log("789asdkjashdkjhaskjdh")
  let response = await axios.get(liveXhr)
  ctx.body = response.data
})

export default router