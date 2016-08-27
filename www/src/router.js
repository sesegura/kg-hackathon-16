import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// Layouts
import Anonymous from './components/Layout/Anonymous.vue'
import Authenticated from './components/Layout/Authenticated.vue'

// Other components
import NotFound from './components/NotFound.vue'

// Authenticated components
import Dashboard from './components/Authenticated/Dashboard.vue'

// Anonymous components
import Home from './components/Anonymous/Home.vue'
import Login from './components/Anonymous/Login.vue'
import Register from './components/Anonymous/Register.vue'

// Routing
const router = new VueRouter({
    history: false
})

router.map({
  '/home': {
    component: Anonymous,
    guest: true,
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
  },
  '*': {
    component: NotFound
  }
})

router.alias({
  '/login': '/home/login',
  '/logout': '/dashboard/logout'
})

router.beforeEach(function (transition) {
  if (transition.to.secure && !store.state.auth) {
    transition.redirect('/home')
  }
  if (transition.to.path === '/dashboard/logout') {
    logout(store)
    transition.redirect('/home')
  }
  transition.next()
})

// Any invalid route will redirect to home
router.redirect({
  '*': '/home'
})

export default router