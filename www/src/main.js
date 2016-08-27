import Vue from 'vue'
import App from './App.vue'
import Login from './components/Login.vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter()

router.map({
  '/login': {
    component: Login
  }
})

// Any invalid route will redirect to home
router.redirect({
  '*': '/login'
})

router.start(App, '#app')
