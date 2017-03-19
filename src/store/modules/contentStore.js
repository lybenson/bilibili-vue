import { contentApi } from 'api'
import * as TYPE from '../actionType/contentType'


// douga 动画
// bangumi 番剧
// music 音乐
// dance 舞蹈
// game 游戏
// technology  科技
// life 生活
// kichiku 鬼畜
// fashion 时尚
// ad 广告
// ent  娱乐
// movie 电影
// teleplay TV剧


const state = {
	// 默认排序
	sortKeys: ['douga', 'bangumi', 'music', 'dance', 'game', 'technology', 'life', 'kichiku', 'fashion', 'ad', 'ent', 'movie', 'teleplay'],
	rows: []
}

const getters = {
	rows: state => state.rows,
	sortKeys: state => state.sortKeys
}

const actions = {
	getContentRows({commit, state, rootState}) {
		rootState.requesting = true
		commit(TYPE.CONTENT_REQUEST)
		contentApi.content().then((response) => {
			rootState.requesting = false
			commit(TYPE.CONTENT_SUCCESS, response)
		}, (error) => {
			rootState.requesting = false
			commit(TYPE.CONTENT_FAILURE)
		})
	}
}

// 1  douga 动画
// 2  bangumi 番剧
// 3  music 音乐
// 4  dance 舞蹈
// 5  game 游戏
// 6  technology  科技
// 7  life 生活
// 8  kichiku 鬼畜
// 9  fashion 时尚
// 10 ad 广告
// 11 ent  娱乐
// 12 movie 电影
// 13 teleplay TV剧
const mutations = {
	[TYPE.CONTENT_REQUEST] (state) {

	},
	[TYPE.CONTENT_SUCCESS] (state, response) {
		for(let key of state.sortKeys) {
			console.log(JSON.stringify(Object.values(response[key])))
			state.rows.push(Object.values(response[key]))
		}
		// response['douga']
		// response['bangumi']
		// response['music']
		// response['dance']
		// response['game']
		// response['technology']
		// response['life']
		// response['kichiku']
		// response['fashion']
		// response['ad']
		// response['ent']
		// response['movie']
		// response['teleplay']
		// 

	},
	[TYPE.CONTENT_FAILURE] (state) {

	}
}

export default {
	state,
	getters,
	actions,
	mutations
}