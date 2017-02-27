import router from 'koa-router'
import axios from 'axios'
const router = Router({
  prefix: '/banner'
})
router.post('/list', async (ctx, next) => {
  let response = await axios.get('http://api.bilibili.com/x/web-show/res/loc?callback=jQuery17205969745067413896_1482805801285&jsonp=jsonp&pf=0&id=23&_=1482805801599')
  ctx.body = response
})



export default router