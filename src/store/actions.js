import _ from 'lodash'

export function dispatchAction ({ dispatch }, payload) {
  if (typeof payload === 'string') {
    return dispatch(payload)
  }
  const { actionName } = payload
  if (!actionName) {
    throw new Error('dispatchAction payload must have an actionName property')
  }
  const newPayload = _.cloneDeep(payload.data)
  return dispatch(actionName, newPayload)
}
