Given the service file:

```js
// @/service.js
export const getApolloApiData = async () => axios.get(...)
```

which is used in `HelloWorld.vue`:

```js
// @/components/HelloWorld.vue
import { getApolloApiData } from '@/service'

export default {
  setup() {
    const threatList = ref([])

    const getThreats = async () => {
      const result = await getApolloApiData('query')
      threatList.value = result.data.threats
    }

    return {
      threatList,
      getThreats
    }
  }
}
```

this is how you could mock the Axios call:

```js
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
```