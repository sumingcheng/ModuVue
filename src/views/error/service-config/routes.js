// error
export default [
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: () => import('@views/error/404.vue')
  },
  {
    path: '/500',
    name: '500',
    component: () => import('@views/error/500.vue')
  }
]
