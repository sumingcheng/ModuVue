const store = new Vuex.Store({
  state: {
    // 应用程序的状态
  },
  mutations: {
    // 更新应用程序状态的方法
  },
  actions: {
    // 触发应用程序 mutations 的方法
  },
  getters: {
    // 计算 state 属性的方法
  }
})

export default {
  namespaced: true,
  store
}
