import { promoteApi } from 'api'
import * as TYPE from '../actionType/promoteType'

const state = {
	promote: {},
	promotelist: [],
	promoteAd: []
}

const getters = {
	promote: state => state.promote,
	promotelist: state => state.promotelist,
	promoteAd: state => state.promoteAd
}

const actions = {
	promote({commit, state, rootState}) {
		rootState.requesting = true
		commit(TYPE.PROMOTE_LIST_REQUEST)
		promoteApi.promote().then((response) => {
			rootState.requesting = false
			commit(TYPE.PROMOTE_LIST_SUCCESS, response)
		}, (error) => {
			rootState.requesting = false
			commit(TYPE.PROMOTE_LIST_FAILURE)
		})
	}
}

const mutations = {
	[TYPE.PROMOTE_LIST_REQUEST] (state) {

	},
	[TYPE.PROMOTE_LIST_SUCCESS] (state, response) {
		state.promote = response
		state.promotelist = response.data
		state.promoteAd = response.promoteAd
	},
	[TYPE.PROMOTE_LIST_FAILURE] (state) {

	}
}

export default {
	state,
	getters,
	actions,
	mutations
}