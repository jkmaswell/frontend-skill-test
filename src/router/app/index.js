import Vue from 'vue'
import Router from 'vue-router'

// Routes

// Scroll Behavior
import { scrollToTop } from '../utils/scrollBehavior'

Vue.use(Router)

export default function appRouter ({ store }) {
  const router = new Router({
    routes: [],
    scrollBehavior: (to, from, savedPosition) => scrollToTop(to, from, savedPosition),
  })

  return router
}
