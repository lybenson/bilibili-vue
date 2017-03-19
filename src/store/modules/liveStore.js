import { liveApi } from 'api'
import * as TYPE from '../actionType/liveType'

const state = {
	online_total: 0, //在线直播数
	dynamic: 0, // 动态数
	recommend: [], // 推荐列表
	ranking: [], //排行
	preview: [], // 为你推荐预览
	recommendAnchor: [] //为你推荐
}

const getters = {
	online_total: state => state.online_total,
	dynamic: state => state.dynamic,
	recommend: state => state.recommend,
	ranking: state => state.ranking,
	preview: state => state.preview,
	recommendAnchor: state => state.recommendAnchor
}

const actions = {
	live({commit, state, rootState}) {
		rootState.requesting = true
		commit(TYPE.LIVE_REQUEST)
		liveApi.live().then((response) => {
			rootState.requesting = false
			commit(TYPE.LIVE_SUCCESS, response.data)
		}, (error) => {
			rootState.requesting = false
			commit(TYPE.LIVE_FAILURE)
		})
	}
}

const mutations = {
	[TYPE.LIVE_REQUEST] (state) {
		
	},
	[TYPE.LIVE_SUCCESS] (state, live) {
		state.online_total = live.online_total
		state.dynamic = live.dynamic
		state.recommend = live.recommend
		state.ranking = live.ranking
		state.preview = live.preview
		state.recommendAnchor = live.recommendAnchor
	},
	[TYPE.LIVE_FAILURE] (state) {

	}
}

export default {
	state,
	getters,
	actions,
	mutations
}