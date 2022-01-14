<template>
  <div>
    <ProfileBarBase :profileInfo="profileInfo" />
    <Calendar />
    <DeliveryData :address="profileInfo.address" />
    <Comida v-for="(comida, index) in comidas" :key="index" :comida="comida" />
  </div>
</template>

<script>
import Comida from '~/components/Comidas/Comida.vue'
export default {
  components: {
    Comida,
  },
  name: 'IndexPage',
  async asyncData({ $content }) {
    const profileInfo = await $content(
      '/clients/cristhian-sanchez-medina'
    ).fetch()
    return { profileInfo }
  },
  data() {
    return {
      comidas: [
        {
          title: 'Media mañana',
          cal: '200Kcal',
          icon: 'manzana',
          creditos: false,
          url: 'media-mañana',
          link: '/',
        },
        {
          title: 'Almuerzo',
          cal: '800Kcal',
          icon: 'lunch',
          creditos: true,
          url: 'almuerzo',
          link: 'almuerzo',
        },
        {
          title: 'Media tarde',
          cal: '200Kcal',
          icon: 'manzana',
          creditos: false,
          url: 'media-tarde',
          link: '/',
        },
        {
          title: 'Cena',
          cal: '800Kcal',
          icon: 'dinner',
          creditos: false,
          url: 'cena',
          link: '/',
        },
      ],
    }
  },
}
</script>
