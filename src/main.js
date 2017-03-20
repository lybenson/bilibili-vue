// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload)

import store from './store'
/* eslint-disable no-new */
new Vue({
	store,
  el: '#app',
  template: '<App/>',
  components: { App }
})
