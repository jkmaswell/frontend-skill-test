import { mount } from '@vue/test-utils'
import InfoCard from './InfoCard'

describe.only('InfoCard Component', () => {
  let wrapper

  const CARD = {
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
  }

  const LANGUAGE = {
    code: 'Code',
    operatingName: 'Operating Name',
    function: 'Function',
    TRN: 'Trade Register Number',
    VAT: 'VAT Number',
    IBAN: 'IBAN Number',
    BIC: 'BIC Code',
  }

  beforeEach(() => {
    wrapper = mount(InfoCard, {
      propsData: {
        card: CARD,
        language: LANGUAGE,
      },
    })
  })

  describe('Rendering', () => {
    it('renders InfoCard correctly', () => {
      expect(wrapper.exists()).toBeTruthy()
    })
  })

  describe('Props', () => {
    it('card', () => {
      const CARD = {
        infoType: 'Buyer',
        name: 'STF Belgium',
        address: 'Des Benjoins, Rue 2, Saint-Denis',
        additionalAddress: '1202 RE, Reunion',
        code: 'STFF',
        operatingName: 'STF Belgium',
        function: 'Local Operations, Manufacturing, Sales, Marketing',
        TRN: '004101534',
        VAT: '1265358102C54',
        IBAN: 'BE19INGB1165807110',
        BIC: 'INGBFR1B',
      }

      wrapper.setProps({ card: CARD })
      const EL = wrapper.find('.info-card__highlight')
      expect(EL.text()).toEqual(CARD.infoType)
    })
  })
})
