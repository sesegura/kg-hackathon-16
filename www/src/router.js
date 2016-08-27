import Vue from 'vue'
import VueRouter from 'vue-router'

import {
    login,
    logout
} from './vuex/actions'

import store from './vuex/store'
Vue.use(VueRouter)

// Layouts
import Anonymous from './components/Layout/Anonymous.vue'
import Authenticated from './components/Layout/Authenticated.vue'

// Other components
import NotFound from './components/NotFound.vue'

// Authenticated components
import Dashboard from './components/Authenticated/Dashboard.vue'
import Onboarding from './components/Authenticated/Onboarding.vue'
import BloodTypeSelector from './components/Authenticated/Onboarding/BloodTypeSelector.vue'
import AgeInput from './components/Authenticated/Onboarding/AgeInput.vue'
import WeightInput from './components/Authenticated/Onboarding/WeightInput.vue'
import DiseasesSelector from './components/Authenticated/Onboarding/DiseasesSelector.vue'
import SurgeriesSelector from './components/Authenticated/Onboarding/SurgeriesSelector.vue'
import DrugsSelector from './components/Authenticated/Onboarding/DrugsSelector.vue'
import TattoosSelector from './components/Authenticated/Onboarding/TattoosSelector.vue'
import ThankYou from './components/Authenticated/Onboarding/ThankYou.vue'

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
        component: Home,
        guest: true
      },
      '/login': {
        component: Login,
        guest: true
      },
      '/register': {
        component: Register,
        guest: true
      }
    }
  },
    '/onboarding' : {
        component : Onboarding,
        secure: true,
        subRoutes : {
            '/bloodtype' : {
                component : BloodTypeSelector,
                secure: true
            },
            '/age' : {
                component : AgeInput,
                secure: true
            },
            '/weight' : {
                component : WeightInput,
                secure: true
            },
            '/diseases' : {
                component : DiseasesSelector,
                secure: true
            },
            '/surgeries' : {
                component : SurgeriesSelector,
                secure: true
            },
            '/drugs' : {
                component : DrugsSelector,
                secure: true
            },
            '/tattoos' : {
                component : TattoosSelector,
                secure: true
            },
            '/thanks' : {
                component : ThankYou,
                secure: true
            }
    }
  },
  '/': {
    component: Authenticated,
    secure: true,
    subRoutes: {
      '/dashboard': {
        component: Dashboard,
        secure: true
      }
     }
    },
  '*': {
    component: NotFound
  }
})

router.alias({
  '/login': '/home/login'
})

router.beforeEach(function (transition) {
  var auth = transition.to.router.app.$store.state.auth;

  if (transition.to.guest && auth) {
    transition.redirect('/dashboard')
  }
  if (transition.to.secure && !auth) {
    transition.redirect('/home')
  }
  if (transition.to.path === '/') {
    transition.redirect('/dashboard')
  }
  if (transition.to.path === '/logout') {
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
