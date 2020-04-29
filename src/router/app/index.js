import loaderRoute from './routes/loaderRoute/loaderRoute'

export default function appRoute ({ store }) {
  return {
    path: '/',
    component: () => import(/* webpackChunkName: "loader-page" */ '@/layouts/StandardLayout/StandardLayout.vue'),
    children: [
      loaderRoute(),
    ],
  }
}
