import { MockReq, MockRes } from '@mocks/express'
import { getRoute } from './invoices'

let mockReq, mockRes, resJson

describe('invoices', () => {
  describe('route', () => {
    beforeEach(() => {
      mockReq = new MockReq()
      mockRes = new MockRes()
      resJson = jest.spyOn(MockRes.prototype, 'json')
    })

    it('is a function with arrity of 2', () => {
      // doesn't call next
      expect(getRoute.length).toEqual(2)
    })

    it('calls res.json with response', async () => {
      await getRoute(mockReq, mockRes)
      expect(resJson).toHaveBeenCalled()
      expect(resJson.mock.calls[0][0].length).toEqual(3)
    })

    it('fails', async () => {
      resJson = jest.spyOn(MockRes.prototype, 'json').mockRejectedValue()
      const res = {
        status: jest.fn(),
      }
      await getRoute(null, res)
      expect(res.status).toHaveBeenCalled()
      expect(res.status.mock.calls[0][0]).toEqual(500)
    })
  })
})
