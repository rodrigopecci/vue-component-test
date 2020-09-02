import { shallowMount } from '@vue/test-utils'
import VueComponentTest from './vue-component-test.vue'

test('Renders', () => {
  const wrapper = shallowMount(VueComponentTest)
  expect(wrapper.exists()).toBe(true)
})
