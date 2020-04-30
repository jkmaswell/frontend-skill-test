import actions from './actions'
import mutations from './mutations'
import state from './state'

export default ({ invoiceService, namespaced = true } = {}) => {
  return {
    namespaced,
    state,
    actions: actions({ invoiceService }),
    mutations,
  }
}
