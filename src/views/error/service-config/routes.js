// error
export default [
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: () => import('@views/error/404.vue')
  }
]
