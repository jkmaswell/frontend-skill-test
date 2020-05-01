import { mount } from '@vue/test-utils'
import LoaderSpinner from './LoaderSpinner'

describe.only('LoaderSpinner Component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(LoaderSpinner)
  })

  describe('Rendering', () => {
    it('renders LoaderSpinner correctly', () => {
      expect(wrapper.exists()).toBeTruthy()
    })
  })
})
