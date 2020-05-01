import { createLocalVue, mount } from '@vue/test-utils'
import Invoice from './Invoice'
import Vuex from 'vuex'
import storeMock from '@mocks/store'

const SELECTED_CARD = {
  status: 'unpaid',
  code: 'H3110017',
  totalAmount: 204,
  buyerName: 'STF France',
  sellerName: 'STF Belgium',
  started: '14 Feb 2018',
  blockchainAddress: '0x4E5748...c81868F6',
  info: [
    {
      infoType: 'Buyer',
      name: 'STF France',
      address: 'Des Benjoins, Rue 2, Saint-Denis',
      additionalAddress: '1202 RE, Reunion',
      code: 'STFF',
      operatingName: 'STF France',
      function: 'Local Operations, Manufacturing, Sales, Marketing',
      TRN: '004101534',
      VAT: '1265358102C54',
      IBAN: 'BE19INGB1165807110',
      BIC: 'INGBFR1B',
    },
    {
      infoType: 'Seller',
      name: 'STF Belgium',
      address: 'Rue Condorcet 163, Moe',
      additionalAddress: '1264 BE, Belgium',
      code: 'STFB',
      operatingName: 'STF Belgium',
      function: 'Local Operations, Manufacturing, Sales, Marketing',
      TRN: '190529485',
      VAT: '1101317918C49',
      IBAN: 'RE11INGB4254456990',
      BIC: 'INGBRA5C',
    },
  ],
}

describe('Invoice component', () => {
  let localVue, storeSetup, store, wrapper, dispatchAction

  beforeEach(() => {
    // sets up some variables to be used throughout the tests
    localVue = createLocalVue()
    localVue.use(Vuex)
    dispatchAction = jest.fn().mockResolvedValue({})
    storeSetup = storeMock()
    store = new Vuex.Store({ ...storeSetup })
    wrapper = mount(Invoice, {
      localVue,
      store,
      methods: {
        dispatchAction,
      },
    })
  })

  describe('Basic structure', () => {
    it('renders ProposalHistory component correctly', () => {
      expect(wrapper.exists()).toBe(true)
    })
  })

  describe('methods', () => {
    it('showCardInfo', () => {
      wrapper.vm.showCardInfo(SELECTED_CARD)
      expect(wrapper.vm.selectedCard).toEqual(SELECTED_CARD)
    })

    it('goBack', () => {
      wrapper.vm.showCardInfo(SELECTED_CARD)
      expect(wrapper.vm.selectedCard).toEqual(SELECTED_CARD)
      wrapper.vm.goBack()
      expect(wrapper.vm.selectedCard).toEqual(null)
    })
  })
})
