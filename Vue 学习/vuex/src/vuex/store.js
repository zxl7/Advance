import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 7
  // 状态对象
}

const mutations = {
  add (state, n) {
    state.count += n
  },
  reduce (state) {
    state.count--
  }
}
const actions = {
  addAction (context) {
    // context上下文对象，store本身
    context.commit('add', 1000)
    // 直接传commit对象，可以让方法体逻辑和代码清晰

    console.log('我比reduce提前执行')
  },
  reduce ({ commit }) {
    commit('reduce')
  }
}

const getters = {
  count: state => (state.count += 500)
}

const moduleA = {
  state,
  mutations,
  getters,
  actions
}
export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  modules: { a: moduleA }
})
