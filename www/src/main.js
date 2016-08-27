import Vue from 'vue'
import App from './App.vue'
import Home from './components/Home.vue'
import Register from './components/Register.vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter()

router.map({
  '/home': {
    component: Home
  },
  '/register': {
    component: Register
  }
})

// Any invalid route will redirect to home
router.redirect({
  '*': '/home'
})

router.start(App, '#app')
