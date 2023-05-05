import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import { createStore } from 'vuex'

// 创建一个新的 store 实例
const RootStore = createStore({
  state,
  getters,
  mutations,
  actions
})

// console.log('store', RootStore)

export default RootStore
