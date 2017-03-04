import * as url from './urlConfig'
import axios from 'axios'

//获取轮播图
export const bannerApi = {
	list() {
		return axios.get(url.banner).then((response) => {
			return response.data
		})
	}
}

// 排行榜
export const rankApi = {
	ranking3() {
		return axios.get(url.ranking3).then((response) => {
			return response.data
		})
	}
}

// 推广
export const promoteApi = {
	promote() {
		return axios.get(url.promote).then((response) => {
			return response.data
		})
	}
}

