<template>
    <div>
        <router-view></router-view>
    </div>
</template>

<script>
import store from './vuex/store'
import { login, logout } from './vuex/actions'

export default {
  store,
  vuex: {
    actions: {
      login,
      logout
    }
  }
}
</script>