import Vue from 'vue'
import Vuex from 'vuex'
import config from './modules/config'
import invoices from './modules/invoices'
import { dispatchAction } from './actions'

Vue.use(Vuex)

export default function store ({ initialConfig }) {
  return new Vuex.Store({
    state: {},
    mutations: {},
    actions: {
      dispatchAction,
    },
    modules: {
      config: config(initialConfig),
      invoices,
    },
  })
}
