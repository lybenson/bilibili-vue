import Router from 'koa-router'
import axios from 'axios'
import { ranking3, ranking7, randking } from './urlConfig'

const router = Router()

// 排行
router.get('/ranking3', async (ctx, next) => {
  let response = await axios.get(ranking3)
  ctx.body = response.data
})
router.get('/ranking7', async (ctx, next) => {
  let response = await axios.get(ranking7)
  ctx.body = response.data
})
router.get('/randking', async (ctx, next) => {
  let response = await axios.get(randking)
  ctx.body = response.data
})
router.get('/1-3day.json', async (ctx, next) => {
  let response = await axios.get(randking)
  ctx.body = response.data
})

export default router