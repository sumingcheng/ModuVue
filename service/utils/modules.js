// 路由模块自动导入
export function dynamicRouting() {
  // 参数 directory: 目录  useSubdirectories: 是否遍历子目录  regExp: 匹配文件的正则表达式
  const context = require.context('@/views', true, /\/routes\.js$/)

  const routes = []

  context.keys().forEach((filename) => {
    const module = context(filename)
    routes.push(...module.default)
  })

  return routes
}
