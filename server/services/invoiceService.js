import config from '../config'

class InvoiceService {
  getInvoices () {
    return config.get('invoices')
  }
}

export default new InvoiceService()
