import router from 'koa-router'
import axios from 'axios'
const router = Router({
  prefix: '/banner'
})
router.post('/list', async (ctx, next) => {
  let response = await axios.get('')
  ctx.body = response
})



export default router