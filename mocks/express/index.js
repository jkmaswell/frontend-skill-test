class MockReq {
  constructor (options = {}) {
    if (typeof options.properties === 'object') {
      for (const key in options.properties) {
        // eslint-disable-next-line no-prototype-builtins
        if (options.properties.hasOwnProperty(key)) {
          this[key] = options.properties[key]
        }
      }
    }
    const {
      body = {},
      session = {},
      cookies = {},
      query = {},
      params = {},
      headers = {},
      reqMetaData = {},
      file = null,
    } = options
    this.headers = headers
    this.body = body
    this.session = session
    this.cookies = cookies
    this.query = query
    this.params = params
    this.reqMetaData = reqMetaData
    this.file = file
  }
}

class MockRes {
  constructor (options = {}) {
    const { locals } = options
    this.locals = locals
  }

  status () {
    return this
  }

  sendStatus () {
    return this
  }

  cookie () {}
  clearCookie () {}
  send () {}
  write () {}
  json () {}
  attachment () {}
}

class MockRouter {
  use () {}
  get () {}
}

// added to avoid changing current tests to implement linting rule of
// capitalized constructor functions/classes

module.exports = {
  MockReq,
  MockRes,
  MockRouter,
}
