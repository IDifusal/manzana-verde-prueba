<template>
  <div class="relative flex px-4 pt-3 pb-4 border-b border-grey-250">
    <img src="~/assets/images/icon-entrega.svg" alt="" />
    <p class="ml-3">
      Entregar en:<br />
      <span class="text-disabled">{{ address }}</span>
    </p>
    <img
      src="~/assets/images/arrow-right.svg"
      alt=""
      class="absolute arrow-right"
    />
  </div>
</template>
<script>
export default {
  props: {
    address: {
      type: String,
      required: true,
    },
  },
}
</script>
<style lang="scss" scoped>
.arrow-right {
  right: 20px;
  top: calc(50% - 7px);
}
</style>