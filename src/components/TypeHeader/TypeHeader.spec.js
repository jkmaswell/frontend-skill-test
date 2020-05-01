import { mount } from '@vue/test-utils'
import TypeHeader from './TypeHeader'

const LANGUAGE = {
  showMe: 'Show me',
  of: 'of',
  from: 'from',
  to: 'to',
}

describe.only('TypeHeader Component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(TypeHeader, {
      propsData: {
        language: LANGUAGE,
      },
    })
  })

  describe('Rendering', () => {
    it('renders TypeHeader correctly', () => {
      expect(wrapper.exists()).toBeTruthy()
    })
  })

  describe('computed', () => {
    it('size', () => {
      const SMALL = wrapper.find('.header--small')
      expect(SMALL.exists()).toBeTruthy()
      wrapper.setProps({ size: 'large' })
      const LARGE = wrapper.find('.header--large')
      expect(LARGE.exists()).toBeTruthy()
    })
  })
})
