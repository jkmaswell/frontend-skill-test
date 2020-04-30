const actions = ({ invoiceService }) => {
  return {
    async getInvoices ({ commit, rootState, state }) {
      const invoices = await invoiceService.getInvoices()
      commit('setInvoices', invoices)
    },
  }
}

export default actions
