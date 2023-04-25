// import loginRoutes from './login'
// import errorRoutes from './error'

const routes = [
  // ...loginRoutes,
  // ...errorRoutes,
  {
    name: 'login',
    path: '/',
    component: () => import('@views/login/pages')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: {
      name: 'login'
    }
  }
]

export default routes
