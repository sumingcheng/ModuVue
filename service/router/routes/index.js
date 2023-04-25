import login from '@views/login/service-config/routes'
import home from '@views/home/service-config/routes'

const routes = [
  ...login,
  ...home,
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: () => import('@views/error/404.vue')
  }
]

export default routes
