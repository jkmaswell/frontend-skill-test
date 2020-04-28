import { get } from 'lodash'
import defaultConfig from './configDefault'

const configObj = defaultConfig

export default {
  get (path, defaultValue) {
    if (!path) return configObj
    return get(configObj, path, defaultValue)
  },
}
