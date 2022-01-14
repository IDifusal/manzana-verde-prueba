<template>
  <div>
    <TopBar :detalle="false" />
    <PlatosList :comidas="platos" />
  </div>
</template>
<script>
import TopBar from '~/components/Comidas/TopBar.vue'
import PlatosList from '~/components/Comidas/PlatosList.vue'
export default {
  components: {
    TopBar,
    PlatosList,
  },
  async asyncData({ $content }) {
    const platos = await $content('/platos/almuerzo').fetch()
    return { platos }
  },
}
</script>