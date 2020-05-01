
import state from '@/store/modules/config/state'

export default ({ initialConfig, namespaced = true }) => {
  return {
    namespaced,
    state: state(initialConfig),
  }
}
