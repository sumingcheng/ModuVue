// import loginRoutes from './login'
// import errorRoutes from './error'

const routes = [
  // ...loginRoutes,
  // ...errorRoutes,
  {
    path: '/',
    redirect: {
      name: 'console'
    }
  },
  {
    path: '*',
    redirect: {
      name: 'login'
    }
  }
]

export default routes
