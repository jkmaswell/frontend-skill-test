import _ from 'lodash'
import config from './modules/config'
import invoices from './modules/invoices'

const initialConfig = {
  language: {
    views: {
      invoice: {
        showMe: 'Show me',
        of: 'of',
        from: 'from',
        to: 'to',
        card: {
          invoice: 'Invoice',
          totalAmount: 'Total amount',
          buyerName: 'Buyer Name',
          sellerName: 'Seller Name',
          started: 'Started',
          blockchainAddress: 'Blockchain Address',
        },
        info: {
          code: 'Code',
          operatingName: 'Operating Name',
          function: 'Function',
          TRN: 'Trade Register Number',
          VAT: 'VAT Number',
          IBAN: 'IBAN Number',
          BIC: 'BIC Code',
        },
      },
    },
  },
}

const store = {
  modules: {
    config: config(initialConfig),
    invoices,
  },
  actions: {
    dispatchAction: (...args) => new Promise(resolve => resolve(args)),
  },
}

const defaultOptions = {
  lodashMerge: true,
}

export default (storeConfig = {}, configOptions = {}) => {
  const config = Object.assign({}, defaultOptions, configOptions)
  const mergeFunction = config.lodashMerge ? _.merge : Object.assign
  return mergeFunction({}, store, storeConfig)
}
