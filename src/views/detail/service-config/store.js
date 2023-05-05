export default {
  namespaced: true,
  state: {
    // 系统时间
    systemTime: new Date().getTime()
  },
  getters: {
    getTime(state) {
      return state.systemTime
    }
  },
  mutations: {
    updateSystemTime(state, systemSelectDisabled) {
      state.systemSelectDisabled = systemSelectDisabled
    },
    setSystemTime(state, newDate) {
      state.systemTime = newDate // 同步设置 systemTime 状态
    }
  },
  actions: {
    async updateSystemTimeAsync({ commit }) {
      commit('setSystemTime', new Date(new Date().getTime())) // 使用同步的 mutation 更新 systemTime 状态
    }
  }
}
