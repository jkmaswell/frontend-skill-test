import { cloneDeep } from 'lodash'
import { shallowMount } from '@vue/test-utils'
import MainCard from './MainCard'

jest.mock('hammerjs', () => jest.fn(() => {
  return {
    get: jest.fn(() => {
      return {
        set: jest.fn(),
      }
    }),
    on: jest.fn(),
  }
}))

describe.only('MainCard Component', () => {
  let wrapper

  const CARDS = [{
    status: 'unpaid',
    code: 'H3110017',
    totalAmount: 204,
    buyerName: 'STF France',
    sellerName: 'STF Belgium',
    started: '14 Feb 2018',
    blockchainAddress: '0x4E5748...c81868F6',
  }, {
    status: 'unpaid',
    code: 'H3110017',
    totalAmount: 204,
    buyerName: 'STF France',
    sellerName: 'STF Belgium',
    started: '14 Feb 2018',
    blockchainAddress: '0x4E5748...c81868F6',
  }, {
    status: 'unpaid',
    code: 'H3110017',
    totalAmount: 204,
    buyerName: 'STF France',
    sellerName: 'STF Belgium',
    started: '14 Feb 2018',
    blockchainAddress: '0x4E5748...c81868F6',
  }]

  const LANGUAGE = {
    invoice: 'Invoice',
    totalAmount: 'Total amount',
    buyerName: 'Buyer Name',
    sellerName: 'Seller Name',
    started: 'Started',
    blockchainAddress: 'Blockchain Address',
  }

  beforeEach(() => {
    wrapper = shallowMount(MainCard, {
      propsData: {
        cards: CARDS,
        language: LANGUAGE,
      },
    })
  })

  describe('Rendering', () => {
    it('renders MainCard correctly', () => {
      expect(wrapper.exists()).toBeTruthy()
    })
  })

  describe('methods', () => {
    it('swipeCard', () => {
      const removeSpy = jest.spyOn(wrapper.vm, 'removeElement').mockResolvedValue()
      wrapper.vm.swipeCard()
      expect(removeSpy).toHaveBeenCalled()
    })

    it('popCard', () => {
      const INITIAL_CARDS = cloneDeep(wrapper.vm.mainCards)
      wrapper.vm.popCard()
      wrapper.vm.$nextTick()
      expect(wrapper.vm.mainCards.length).toEqual(INITIAL_CARDS.length - 1)
    })

    it('selectCard', () => {
      wrapper.vm.selectCard()
      wrapper.vm.$nextTick()
      expect(wrapper.emitted().selected).toBeTruthy()
    })
  })
})
