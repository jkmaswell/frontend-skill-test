import invoiceService from './invoiceService'
import RequestService from './utils/requestService'

jest.mock('./utils/requestService')

describe('invoiceService', () => {
  const mockRequestService = RequestService.mock.instances[0]

  beforeEach(() => {
    mockRequestService.get.mockResolvedValue({})
    mockRequestService.get.mockClear()
    mockRequestService.post.mockResolvedValue({})
    mockRequestService.post.mockClear()
    mockRequestService.put.mockResolvedValue({})
    mockRequestService.put.mockClear()
  })

  describe('getInvoices', () => {
    it('calls correct get endpoint', () => {
      invoiceService.getInvoices()
      expect(mockRequestService.get.mock.calls[0][0]).toBe('api/invoices')
    })
    it('returns null if request has 404 response status', async () => {
      mockRequestService.get.mockRejectedValue({ response: { status: 404 } })
      mockRequestService.get.mockClear()
      const response = await invoiceService.getInvoices()
      expect(response).toBe(undefined)
    })
  })
})
