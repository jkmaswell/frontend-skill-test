import _ from 'lodash'

export function scrollToTop (to, from, savedPosition) {
  const scrollAction = _.get(to, 'meta.scrollAction', {})
  const { type } = scrollAction
  if (!type || type === 'scrollToTop') return { x: 0, y: 0 }
}
