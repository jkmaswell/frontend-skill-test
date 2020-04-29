import _ from 'lodash'

export default (viewName) => {
  return {
    computed: {
      appLanguage () {
        return this.$store.state.config.language.views || {}
      },
      viewLanguage () {
        const defaultLanguage = (this.appLanguage && this.appLanguage[viewName]) || {}
        const viewLanguage = (this.appLanguage && this.appLanguage.views && this.appLanguage.views[viewName]) || {}
        return _.merge({}, defaultLanguage, viewLanguage)
      },
      componentLanguage () {
        const defaultLanguage = (this.appLanguage && this.appLanguage[viewName]) || {}
        const componentLanguage = (this.appLanguage && this.appLanguage.components && this.appLanguage.components[viewName]) || {}
        return _.merge({}, defaultLanguage, componentLanguage)
      },
    },
  }
}
