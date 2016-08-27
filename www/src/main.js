import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource'
Vue.use(VueResource)

import router from './router'
import store from './vuex/store'
import { sync } from 'vuex-router-sync'
sync(store, router)

router.start(App, '#app')
