import routes from './routes'
import { createRouter, createWebHistory } from 'vue-router'

const Router = createRouter({
  history: createWebHistory(),
  routes
})

Router.beforeEach((to, from, next) => {
  console.log('to', to)
  if (to.matched.length === 0) {
    next('/404')
  } else {
    next()
  }
})

export { Router }
