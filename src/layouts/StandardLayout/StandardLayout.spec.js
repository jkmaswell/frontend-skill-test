import { mount } from '@vue/test-utils'
import StandardLayout from './StandardLayout'

describe.only('StandardLayout Component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(StandardLayout, {
      stubs: ['router-view'],
    })
  })

  describe('Rendering', () => {
    it('renders StandardLayout correctly', () => {
      expect(wrapper.exists()).toBeTruthy()
    })
  })
})
