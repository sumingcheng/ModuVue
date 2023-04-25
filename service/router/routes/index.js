// import loginRoutes from './login'
// import errorRoutes from './error'

const routes = [
  // ...loginRoutes,
  // ...errorRoutes,
  {
    name: 'login',
    path: '/',
    component: () => import('@views/login/pages/index.vue')
  },
  {
    name: 'home',
    path: '/home',
    component: () => import('@views/home/pages')
  },
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: () => import('@views/error/404.vue')
  }
]

export default routes
