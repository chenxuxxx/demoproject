
const state = {
  count: 0
}
const mutations = {
  demo (state, val) {
    // console.log(state.count)
    // console.log(val)
    state.count += val
    console.log(state.count)
  }
}
export default {
  namespaced: true,
  state,
  mutations
}
