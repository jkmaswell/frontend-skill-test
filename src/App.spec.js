import { mount } from '@vue/test-utils'
import App from './App'

describe.only('App Component', () => {
  let wrapper

  beforeEach(() => {
    wrapper = mount(App, {
      stubs: ['router-view'],
    })
  })

  describe('Rendering', () => {
    it('renders App correctly', () => {
      expect(wrapper.exists()).toBeTruthy()
    })
  })
})
