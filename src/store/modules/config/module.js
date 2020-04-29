
import state from './state'

export default ({ initialConfig, namespaced = true }) => {
  return {
    namespaced,
    state: state(initialConfig),
  }
}
