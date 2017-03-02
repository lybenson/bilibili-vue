import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


import bannerStore from './modules/bannerStore'

const state = {
	requesting: false,
	error: {}
}

const getters = {
	requesting: state => state.requesting,
	error: state => state.error
}

export default new Vuex.Store({
	state,
	getters,
	modules: {
		bannerStore
	}
})