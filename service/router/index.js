import routes from './routes'
import { createRouter, createWebHistory } from 'vue-router'

const Router = createRouter({
  history: createWebHistory(),
  routes
})

// 路由守卫
Router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    next('/404')
  } else {
    next()
  }
})

export { Router }
