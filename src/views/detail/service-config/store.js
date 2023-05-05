import { formatDate } from '@serv/utils/day'

export default {
  namespaced: true,
  state: {
    // 系统时间
    systemTime: formatDate(new Date().getTime(), 'YYYY-MM-DD HH:mm:ss')
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
      commit('setSystemTime', formatDate(new Date().getTime(), 'YYYY-MM-DD HH:mm:ss'))
    }
  }
}
