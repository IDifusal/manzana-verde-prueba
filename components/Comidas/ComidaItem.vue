<template>
  <div class="w-11/12 m-auto mt-7">
    <nuxt-link :to="`${comida.category}/${comida.slug}`">
      <div
        class="img-dish h-44 rounded-tl-xl rounded-tr-xl"
        :style="{
          backgroundImage: `url(${comida.image})`,
        }"
      ></div>
      <div
        class="
          sub-content
          px-4
          pb-3
          border border-grey-250
          rounded-bl-xl rounded-br-xl
          relative
        "
      >
        <h2 class="text-green-content text-lg font-semibold">
          {{ comida.title }}
        </h2>
        <p>{{ comida.cal }}Kcal</p>
        <div
          v-if="comida.recomendado"
          class="
            absolute
            w-32
            h-7
            featured
            bg-green-bg
            flex
            justify-center
            text-green-content
            font-semibold
          "
        >
          Recomendado
        </div>
      </div></nuxt-link
    >
  </div>
</template>
<script>
export default {
  props: {
    comida: {
      type: Object,
      rquired: true,
    },
  },
}
</script>
<style lang="scss" scoped>
.featured {
  top: 0;
  right: 15px;
}
.img-dish {
  background-repeat: no-repeat;
}
</style>