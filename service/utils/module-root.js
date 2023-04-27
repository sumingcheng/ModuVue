export default {
  name: 'module-root',
  render: (createElement) => {
    return createElement('router-view')
  },
  methods: {
    // 初始化模块配置
    initModule(config) {
      if (this.$store.state.moduleNames.indexOf(config.name) === -1) {
        this.$store.commit('injectedModuleName', config.name)
        this.initModuleLang(config.name, config.lang)
        this.initModuleStore(config.name, config.store)
      }
    },
    // 初始化模块语言配置
    initModuleLang(moduleName, moduleLang) {},
    // 初始化模块状态配置
    initModuleStore(moduleName, moduleStore) {
      this.$store.registerModule(moduleName, moduleStore)
    },
  }
}
