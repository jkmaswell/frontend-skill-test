import Vue from 'vue'
import Vuex from 'vuex'
import { dispatchAction } from './actions'

Vue.use(Vuex)

export default function store ({ initialConfig }) {
  return new Vuex.Store({
    state: {},
    mutations: {},
    actions: {
      dispatchAction,
    },
    modules: {},
  })
}
