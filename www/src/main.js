import Vue from 'vue'
import App from './App.vue'

// Layouts
import Anonymous from './components/Layout/Anonymous.vue'
import Authenticated from './components/Layout/Authenticated.vue'

// Main components
import Dashboard from './components/Dashboard.vue'
import Home from './components/Home.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(VueRouter)

const router = new VueRouter()

router.map({
  '/home': {
    component: Anonymous,
    subRoutes : {
      '/': {
        component: Home
      },
      '/login': {
        component: Login
      },
      '/register': {
        component: Register
      }
    }
  },
  '/': {
    component: Authenticated,
    secure: true,
    subRoutes: {
      '/dashboard': {
        component: Dashboard
      }
    }
  }
})

router.beforeEach(function (transition) {
  if (transition.to.secure) {
    transition.redirect('/home');
  } else {
    transition.next();
  }
});

// Any invalid route will redirect to home
router.redirect({
  '*': '/home'
})

router.start(App, '#app')
