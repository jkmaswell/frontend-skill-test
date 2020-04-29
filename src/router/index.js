import Vue from 'vue'
import Router from 'vue-router'
import appRoute from './app'

// Scroll Behavior
import { scrollToTop } from './utils/scrollBehavior'

Vue.use(Router)

const routes = (store) => [
  {
    path: '/',
    name: 'home',
    redirect: { name: 'loader' },
  },
  appRoute({ store }),
  {
    path: '*',
    redirect: '/loader',
  },
]

const router = (store) => {
  const router = new Router({
    routes: routes(store),
    scrollBehavior: (to, from, savedPosition) => scrollToTop(to, from, savedPosition),
  })

  return router
}

export { routes }

export default router
