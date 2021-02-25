import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
jest.mock('@/service', () => {
  return {
    getApolloApiData: () => ({
      data: {
        threats: [{ id: 123456 }]
      }
    })
  }
})

describe('HelloWorld.vue', () => {
  it('gets threats', async () => {
    const wrapper = shallowMount(HelloWorld)
    await wrapper.vm.getThreats()
    expect(wrapper.vm.threatList).toContainEqual({ id: 123456 })
  })
})
