<template>
  <div>
    <ComidaItem
      v-for="(comida, index) in comidas"
      :key="index"
      :comida="comida"
    />
  </div>
</template>
<script>
import ComidaItem from '~/components/Comidas/ComidaItem.vue'
export default {
  components: {
    ComidaItem,
  },
  props: {
    comidas: {
      type: Array,
      required: true,
    },
  },
}
</script>