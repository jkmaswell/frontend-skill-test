import invoiceRoute from './routes/invoiceRoute/invoiceRoute'

export default function appRoute ({ store }) {
  return {
    path: '/',
    component: () => import(/* webpackChunkName: "loader-page" */ '@/layouts/StandardLayout/StandardLayout.vue'),
    children: [
      invoiceRoute({ store }),
    ],
  }
}
