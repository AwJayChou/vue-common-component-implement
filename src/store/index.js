import Vue from 'vue'
import Vuex from 'vuex'
import count from './modules/count'
import user from './modules/user'

Vue.use(Vuex)



export default new Vuex.Store({
  modules: {
    a: count, user
  }
})
