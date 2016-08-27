import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/logger'

Vue.use(Vuex)
Vue.config.debug = true

const state = {
    auth: null
}

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  strict: debug,
  middlewares: debug ? [createLogger()] : []
})