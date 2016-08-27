import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/logger'

Vue.use(Vuex)
Vue.config.debug = true

const state = {
    auth: localStorage.getItem('id_user') || null
}

const mutations = {
    LOGIN (state, result) {
        state.auth = result._id
        localStorage.setItem('id_user', result._id)
    },
    LOGOUT (state) {
        state.auth = null
        localStorage.removeItem('id_user')
    }
}

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state,
  mutations,
  strict: debug,
  middlewares: debug ? [createLogger()] : []
})