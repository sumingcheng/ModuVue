// detail 模块的路由配置
export default [
  {
    name: 'detail',
    path: '/detail',
    component: () => import('@views/detail/pages/index.vue')
  }
]
