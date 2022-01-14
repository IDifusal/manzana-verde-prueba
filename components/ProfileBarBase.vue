<template>
  <div class="profile-base px-4 pb-4">
    <div class="flex mt-4 text-grey-50">
      <img :src="profileInfo.image" :alt="profileInfo.name" width="30px" />
      <h1 class="text-xl font-semibold ml-2.5">Mis pedidos</h1>
      <div class="level w-6 h-6 text-center text-xs ml-10">
        {{ profileInfo.level }}
      </div>
      <img src="~/assets/images/icon-auto.svg" alt="" class="ml-3.5" />
      <img src="~/assets/images/icon-food-engine.svg" alt="" class="ml-3.5" />
    </div>
    <calories-bar />
  </div>
</template>
<script>
import CaloriesBar from './ProfileBar/CaloriesBar.vue'
export default {
  components: {
    CaloriesBar,
  },
  props: {
    profileInfo: {
      type: Object,
      required: true,
    },
  },
}
</script>
<style lang="scss" scoped>
.level {
  border: 3px solid #35b266;
  border-radius: 100%;
}
.profile-base {
  box-shadow: 0px 2px 4px rgba(232, 232, 232, 0.5);
}
</style>