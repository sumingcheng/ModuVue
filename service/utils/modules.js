// 路由模块自动导入
export function dynamicRouting() {
  // 参数 directory: 目录  useSubdirectories: 是否遍历子目录  regExp: 匹配文件的正则表达式
  const context = require.context('@/views', true, /\/routes\.js$/)

  const routes = []

  context.keys().forEach((fileName) => {
    const module = context(fileName)
    routes.push(...module.default)
  })

  return routes
}

//　VueX 模块自动导入
export function dynamicStore(RootStore) {
  const context = require.context('@/views', true, /\/store\.js$/)

  context.keys().forEach((fileName) => {
    const module = context(fileName)
    const moduleName = fileName.match(/\.\/([a-zA-Z0-9_-]+)\//)[1]

    RootStore.registerModule(moduleName, module.default || module)
  })
}
