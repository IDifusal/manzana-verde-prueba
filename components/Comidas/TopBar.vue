<template>
  <div class="content-topbar px-4 py-2">
    <div v-if="detalle" class="grid grid-cols-3">
      <div @click="goToPrev()" class="underline text-bar-color">Atrás</div>
      <div class="text-center text-xl font-semibold">Detalle</div>
      <div class="text-right flex justify-end">
        <img src="~/assets/images/fav-icon.svg" width="20px" />
      </div>
    </div>
    <div v-else class="grid grid-cols-3">
      <div @click="goToPrev()" class="underline">Atrás</div>
      <div class="text-center text-xl font-semibold">{{ cleanTitle }}</div>
      <div class="text-right">DIA</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: '',
    }
  },
  props: {
    detalle: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    goToPrev() {
      // Go to previous page
      this.$router.go(-1)
    },
  },
  mounted() {
    this.title = this.$route.name
  },
  computed: {
    cleanTitle() {
      return this.title.slice(8, this.title.length)
    },
  },
}
</script>
<style lang="scss" scoped>
.content-topbar {
  box-shadow: 0px 2px 4px rgba(232, 232, 232, 0.5);
}
</style>
