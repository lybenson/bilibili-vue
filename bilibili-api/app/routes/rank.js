import Router from 'koa-router'
import axios from 'axios'
import { ranking3, ranking7, randking, rankbase } from './urlConfig'

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

// contentrank -三日排行
router.post('/contentrank', async (ctx, next) => {
	const body = ctx.request.body
  let categoryId = body.categoryId
	
  let url = rankbase + categoryId + '-3day.json'
  let response = await axios.get(url)
  ctx.body = response.data
})

// contentrank -一周排行
router.post('/contentrankweek', async (ctx, next) => {
  const body = ctx.request.body
  let categoryId = body.categoryId
  
  let url = rankbase + categoryId + '-week.json'
  let response = await axios.get(url)
  ctx.body = response.data
})

export default router