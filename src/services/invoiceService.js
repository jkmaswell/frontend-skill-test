import RequestService from '@/services/utils/requestService'

class InvoiceService {
  constructor () {
    this.request = new RequestService()
  }

  getInvoices () {
    return this.request.get('api/invoices/')
      .then(response => response.data)
      .catch((err) => console.error('Ups.. there was an error:', err))
  }
}

export default new InvoiceService()
