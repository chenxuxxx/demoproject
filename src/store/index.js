import Vue from 'vue'
import Vuex from 'vuex'
import testModules from './testModules'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)
const store = new Vuex.Store({
  plugins: [createPersistedState({
    storage: window.sessionStorage
  })],
  state: {
    count: 0
  },
  mutations: {
    increment (state, val) {
      console.log(val)
      state.count += val
    }
  },
  modules: {
    testModules: testModules
  }
})
export default store
