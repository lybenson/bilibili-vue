// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { createApp } from 'vue'
import App from './App.vue'
import VueLazyload from 'vue3-lazyload'

import store from './store'

createApp(App).use(store).use(VueLazyload).mount('#app')
