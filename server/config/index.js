import { merge, get } from 'lodash'
import defaultConfig from './configDefault'
import appLanguage from './appLanguage'

const configObj = merge({}, defaultConfig, appLanguage)

export default {
  get (path, defaultValue) {
    if (!path) return configObj
    return get(configObj, path, defaultValue)
  },
}
