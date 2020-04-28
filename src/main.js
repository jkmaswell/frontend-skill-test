import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import RequestService from './services/utils/requestService'

Vue.config.productionTip = false

const request = new RequestService()

request.get(`${process.env.VUE_APP_API_URL}/config`)
  .then(response => response.data)
  .then(initialConfig => {
    const initialStore = store({ initialConfig })
    new Vue({
      router: router(initialStore),
      store: initialStore,
      render: h => h(App),
    }).$mount('#app')
  })
  .catch(err => console.error(err)) // TODO: create some error page
