
export default function loaderRoute () {
  return {
    path: '/invoice',
    name: 'invoice',
    component: () => import(/* webpackChunkName: "loader-page" */ '@/views/Invoice/Invoice.vue'),
  }
}
