import Vue from 'vue'
import Vuex from 'vuex'
import testModules from './testModules'
Vue.use(Vuex)
const store = new Vuex.Store({
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
