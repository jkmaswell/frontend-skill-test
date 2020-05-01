import RequestService from './requestService'
import axiosMock from '@mocks/axios/axios'

describe('Request Service', () => {
  let requestService
  const mockUrl = 'fake-url/'
  const mockCall = 'https://frontend-skill-test.herokuapp.com/fake-url/'
  const requestBody = {}
  const responseBody = {
    data: {
      body: [{}],
    },
  }
  const customResponse = {
    arr: [],
    obj: {},
    num: 12341235,
    bool: true,
  }
  const errorResponse = { msg: 'this is an error' }

  beforeEach(() => {
    requestService = new RequestService({ axios: axiosMock({ jest }) })
  })

  describe('get', () => {
    beforeEach(() => {
      requestService.axios.get.mockClear()
      requestService.axios.get.mockResolvedValue(responseBody)
    })

    it('calls axios.get with a url and empty object if no config is supplied', () => {
      requestService.get(mockUrl)
      expect(requestService.axios.get).toHaveBeenCalledWith(mockCall, {})
    })

    it('calls axios.get with a url and config object if a config is supplied', () => {
      const options = {
        config: {
          key1: 'value1',
          key2: 'value2',
        },
      }
      requestService.get(mockUrl, options)
      expect(requestService.axios.get).toHaveBeenCalledWith(mockCall, options.config)
    })

    it('returns response data unmodified if no transofrm function is given', async () => {
      const options = {
        config: {
          key1: 'value1',
          key2: 'value2',
        },
      }
      const response = await requestService.get(mockUrl, options)
      expect(response).toBe(responseBody)
    })

    it('returns first object in the array for "getDataFromBodyTransform" transofrm function is given', async () => {
      const options = {
        transformFunction: 'getDataFromBodyTransform',
        config: {
          key1: 'value1',
          key2: 'value2',
        },
      }
      const response = await requestService.get(mockUrl, options)
      expect(response).toBe(responseBody.data.body[0])
    })

    it('returns body object "getBodyTransform" transofrm function is given', async () => {
      const options = {
        transformFunction: 'getBodyTransform',
        config: {
          key1: 'value1',
          key2: 'value2',
        },
      }
      const response = await requestService.get(mockUrl, options)
      expect(response).toBe(responseBody.data.body)
    })

    it('returns result of custom transform function if supplied', async () => {
      const options = {
        transformFunction: jest.fn().mockReturnValue(customResponse),
        config: {
          key1: 'value1',
          key2: 'value2',
        },
      }
      const response = await requestService.get(mockUrl, options)
      expect(response).toBe(customResponse)
    })

    it('returns an error when axios errors', async () => {
      requestService.axios.get.mockRejectedValue(errorResponse)
      const options = {}
      try {
        const response = await requestService.get(mockUrl, options)
        expect(true).toBe(false) // don't expect to get here, should err out into catch block
      } catch (e) {
        expect(e).toBe(errorResponse)
      }
    })
  })

  describe('post', () => {
    beforeEach(() => {
      requestService.axios.post.mockClear()
      requestService.axios.post.mockResolvedValue(responseBody)
    })
    it('calls axios.post with a url and empty object if no config is supplied', () => {
      requestService.post(mockUrl, requestBody)
      expect(requestService.axios.post).toHaveBeenCalledWith(mockCall, requestBody, {})
    })
    it('calls axios.post with a url and config object if a config is supplied', () => {
      const options = {
        config: {
          key1: 'value1',
          key2: 'value2',
        },
      }
      requestService.post(mockUrl, requestBody, options)
      expect(requestService.axios.post).toHaveBeenCalledWith(mockCall, requestBody, options.config)
    })

    it('returns response data unmodified if no transofrm function is given', async () => {
      const options = {}
      const response = await requestService.post(mockUrl, requestBody, options)
      expect(response).toBe(responseBody)
    })

    it('returns first object in the array for "getDataFromBodyTransform" transofrm function is given', async () => {
      const options = {
        transformFunction: 'getDataFromBodyTransform',
      }
      const response = await requestService.post(mockUrl, requestBody, options)
      expect(response).toBe(responseBody)
    })

    it('returns body object "getBodyTransform" transofrm function is given', async () => {
      const options = {
        transformFunction: 'getBodyTransform',
      }
      const response = await requestService.post(mockUrl, requestBody, options)
      expect(response).toBe(responseBody)
    })

    it('returns result of custom transform function if supplied', async () => {
      const options = {
        transformFunction: jest.fn().mockReturnValue(customResponse),
        config: {
          key1: 'value1',
          key2: 'value2',
        },
      }
      const response = await requestService.post(mockUrl, requestBody, options)
      expect(response).toBe(responseBody)
    })
  })

  describe('put', () => {
    beforeEach(() => {
      requestService.axios.put.mockClear()
      requestService.axios.put.mockResolvedValue(responseBody)
    })
    it('calls axios.put with a url and empty object if no config is supplied', () => {
      requestService.put(mockUrl, requestBody)
      expect(requestService.axios.put).toHaveBeenCalledWith(mockCall, requestBody, {})
    })
    it('calls axios.put with a url and config object if a config is supplied', () => {
      const options = {
        config: {
          key1: 'value1',
          key2: 'value2',
        },
      }
      requestService.put(mockUrl, requestBody, options)
      expect(requestService.axios.put).toHaveBeenCalledWith(mockCall, requestBody, options.config)
    })

    it('returns response data unmodified if no transofrm function is given', async () => {
      const options = {}
      const response = await requestService.put(mockUrl, requestBody, options)
      expect(response).toBe(responseBody)
    })

    it('returns first object in the array for "getDataFromBodyTransform" transofrm function is given', async () => {
      const options = {
        transformFunction: 'getDataFromBodyTransform',
      }
      const response = await requestService.put(mockUrl, requestBody, options)
      expect(response).toBe(responseBody.data.body[0])
    })

    it('returns body object "getBodyTransform" transofrm function is given', async () => {
      const options = {
        transformFunction: 'getBodyTransform',
      }
      const response = await requestService.put(mockUrl, requestBody, options)
      expect(response).toBe(responseBody.data.body)
    })

    it('returns result of custom transform function if supplied', async () => {
      const options = {
        transformFunction: jest.fn().mockReturnValue(customResponse),
        config: {
          key1: 'value1',
          key2: 'value2',
        },
      }
      const response = await requestService.put(mockUrl, requestBody, options)
      expect(response).toBe(customResponse)
    })

    it('returns an error when axios errors', async () => {
      requestService.axios.put.mockRejectedValue(errorResponse)
      const options = {}
      const response = await requestService.put(mockUrl, requestBody, options)
      expect(response).toBe(errorResponse)
    })
  })

  describe('patch', () => {
    beforeEach(() => {
      requestService.axios.patch.mockClear()
      requestService.axios.patch.mockResolvedValue(responseBody)
    })
    it('calls axios.patch with a url and empty object if no config is supplied', () => {
      requestService.patch(mockUrl, requestBody)
      expect(requestService.axios.patch).toHaveBeenCalledWith(mockCall, requestBody, {})
    })
    it('calls axios.put with a url and config object if a config is supplied', () => {
      const options = {
        config: {
          key1: 'value1',
          key2: 'value2',
        },
      }
      requestService.patch(mockUrl, requestBody, options)
      expect(requestService.axios.patch).toHaveBeenCalledWith(mockCall, requestBody, options.config)
    })

    it('returns response data unmodified if no transofrm function is given', async () => {
      const options = {}
      const response = await requestService.patch(mockUrl, requestBody, options)
      expect(response).toBe(responseBody)
    })

    it('returns first object in the array for "getDataFromBodyTransform" transofrm function is given', async () => {
      const options = {
        transformFunction: 'getDataFromBodyTransform',
      }
      const response = await requestService.patch(mockUrl, requestBody, options)
      expect(response).toBe(responseBody.data.body[0])
    })

    it('returns body object "getBodyTransform" transofrm function is given', async () => {
      const options = {
        transformFunction: 'getBodyTransform',
      }
      const response = await requestService.patch(mockUrl, requestBody, options)
      expect(response).toBe(responseBody.data.body)
    })

    it('returns result of custom transform function if supplied', async () => {
      const options = {
        transformFunction: jest.fn().mockReturnValue(customResponse),
        config: {
          key1: 'value1',
          key2: 'value2',
        },
      }
      const response = await requestService.patch(mockUrl, requestBody, options)
      expect(response).toBe(customResponse)
    })

    it('returns an error when axios errors', async () => {
      requestService.axios.patch.mockRejectedValue(errorResponse)
      const options = {}
      const response = await requestService.patch(mockUrl, requestBody, options)
      expect(response).toBe(errorResponse)
    })
  })

  describe('delete', () => {
    beforeEach(() => {
      requestService.axios.delete.mockClear()
      requestService.axios.delete.mockResolvedValue(responseBody)
    })
    it('calls axios.delete with a url and empty object if no config is supplied', () => {
      requestService.delete(mockUrl, requestBody)
      expect(requestService.axios.delete).toHaveBeenCalledWith(mockCall, requestBody)
    })
    it('calls axios.delete with a url and config object if a config is supplied', () => {
      const options = {
        config: {
          key1: 'value1',
          key2: 'value2',
        },
      }
      requestService.delete(mockUrl, options)
      expect(requestService.axios.delete).toHaveBeenCalledWith(mockCall, options.config)
    })

    it('returns response data unmodified if no transofrm function is given', async () => {
      const response = await requestService.delete(mockUrl, requestBody)
      expect(response).toBe(responseBody)
    })

    it('returns first object in the array for "getDataFromBodyTransform" transofrm function is given', async () => {
      const options = {
        transformFunction: 'getDataFromBodyTransform',
      }
      const response = await requestService.delete(mockUrl, options)
      expect(response).toBe(responseBody.data.body[0])
    })

    it('returns body object "getBodyTransform" transofrm function is given', async () => {
      const options = {
        transformFunction: 'getBodyTransform',
      }
      const response = await requestService.delete(mockUrl, options)
      expect(response).toBe(responseBody.data.body)
    })

    it('returns result of custom transform function if supplied', async () => {
      const options = {
        transformFunction: jest.fn().mockReturnValue(customResponse),
        config: {
          key1: 'value1',
          key2: 'value2',
        },
      }
      const response = await requestService.delete(mockUrl, options)
      expect(response).toBe(customResponse)
    })

    it('returns an error when axios errors', async () => {
      requestService.axios.delete.mockRejectedValue(errorResponse)
      const options = {}
      try {
        const response = await requestService.delete(mockUrl, requestBody, options)
        expect(true).toBe(false) // don't expect to get here, should err out into catch block
      } catch (e) {
        expect(e).toBe(errorResponse)
      }
    })
  })

  describe('head', () => {
    beforeEach(() => {
      requestService.axios.head.mockClear()
      requestService.axios.head.mockResolvedValue(responseBody)
    })
    it('calls axios.delete with a url and empty object if no config is supplied', () => {
      requestService.head(mockUrl, requestBody)
      expect(requestService.axios.head).toHaveBeenCalledWith(mockUrl, requestBody)
    })
    it('returns result of head without modification', async () => {
      const response = await requestService.head(mockUrl, requestBody)
      expect(response).toEqual(responseBody)
    })
  })
})
