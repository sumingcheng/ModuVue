import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'


const store = {
  strict: process.env.NODE_ENV === 'development'
}

// root store
store.state = state
store.getters = getters
store.mutations = mutations
store.actions = actions
// modules store
store.modules = {}
// 注入 console 的 store
store.modules['console'] = consoleStore

export default store
