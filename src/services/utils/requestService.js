import axios from 'axios'

const defaultTransform = (response) => response
const getDataFromBodyTransform = (response) => response.data.body[0]
const getBodyTransform = (response) => response.data.body

const transformFunctions = {
  defaultTransform,
  getDataFromBodyTransform,
  getBodyTransform,
}

// axios setup
const handleError = (error) => {
  return Promise.reject(error)
}

axios.interceptors.response.use(response => response, handleError)

axios.defaults.xsrfCookieName = '_csrf'
axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN'
axios.defaults.validateStatus = status => {
  return status >= 200 && status < 300
}

class RequestService {
  constructor (options = {}) {
    this.axios = options.axios || axios
  }

  get (url, options = {}) {
    // options is a non-axios param that we can use to specify/modify requests
    // options may have a config property that is used for axios configs
    const { config = {} } = options
    return this.axios.get(url, config)
      .then(this.getTransformFunction(options.transformFunction))
  }

  post (url, body = {}, options = {}) {
    const { config = {} } = options
    return this.axios.post(url, body, config)
  }

  put (url, body = {}, options = {}) {
    const { config = {} } = options
    return this.axios.put(url, body, config)
      .then(this.getTransformFunction(options.transformFunction))
      .catch(err => err)
  }

  patch (url, body = {}, options = {}) {
    const { config = {} } = options
    return this.axios.patch(url, body, config)
      .then(this.getTransformFunction(options.transformFunction))
      .catch(err => err)
  }

  delete (url, options = {}) {
    const { config = {} } = options
    return this.axios.delete(url, config)
      .then(this.getTransformFunction(options.transformFunction))
  }

  head (...args) {
    return this.axios.head(...args)
  }

  getTransformFunction (transformFunction) {
    if (!transformFunction) {
      return defaultTransform
    }
    if (typeof transformFunction === 'string') {
      return transformFunctions[transformFunction]
    }
    return transformFunction
  }
}

export default RequestService
