import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/store'
import { sync } from 'vuex-router-sync'

import VueResource from 'vue-resource'
Vue.use(VueResource)

sync(store, router)

router.start(App, '#app')
