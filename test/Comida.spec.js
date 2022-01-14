import { shallowMount } from '@vue/test-utils'
import Comida from '@/components/Comidas/Comida.vue'

describe('Comida.vue', () => {
  shallowMount(Comida, {
    propsData: {
      comida: [
        {
          title: 'Media mañana',
          cal: '200Kcal',
          icon: 'manzana',
          creditos: false,
          url: 'media-mañana',
        },
        {
          title: 'Almuerzo',
          cal: '800Kcal',
          icon: 'lunch',
          creditos: true,
          url: 'almuerzo',
        },
        {
          title: 'Media tarde',
          cal: '200Kcal',
          icon: 'manzana',
          creditos: false,
          url: 'media-tarde',
        },
        {
          title: 'Cena',
          cal: '800Kcal',
          icon: 'dinner',
          creditos: false,
          url: 'cena',
        },
      ],
    },
  })
})
