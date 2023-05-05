import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
import { createStore } from 'vuex'
import { dynamicStore } from '@serv/utils/modules'

// 创建一个新的 store 实例
const RootStore = createStore({
  state,
  getters,
  mutations,
  actions
})

// 其他模块
dynamicStore(RootStore)

export default RootStore
