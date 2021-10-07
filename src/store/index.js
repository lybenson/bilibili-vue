
import { createStore } from 'vuex'

import bannerStore from './modules/bannerStore'
import rankStore from './modules/rankStore'
import promoteStore from './modules/promoteStore'
import liveStore from './modules/liveStore'
import contentStore from './modules/contentStore'

const state = {
  requesting: false,
  error: {}
}

const getters = {
  requesting: state => state.requesting,
  error: state => state.error
}

export default createStore({
  state,
  getters,
  modules: {
    bannerStore,
    rankStore,
    promoteStore,
    liveStore,
    contentStore
  }
})
