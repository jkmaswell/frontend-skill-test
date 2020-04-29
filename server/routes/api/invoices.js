import { Router } from 'express'
import InvoiceService from '../../services/invoiceService'

const router = Router()

export const getRoute = (req, res) => {
  try {
    const invoices = InvoiceService.getInvoices()
    res.json(invoices)
  } catch (err) {
    console.error(err)
    res.status(500)
  }
}

router.get('/', getRoute)

export default router
