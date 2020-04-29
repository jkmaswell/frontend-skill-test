
export default function loaderRoute () {
  return {
    path: '/loader',
    name: 'loader',
    component: () => import(/* webpackChunkName: "loader-page" */ '@/views/Loader/Loader.vue'),
  }
}
