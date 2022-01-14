<template>
  <div>
    <div class="flex justify-between">
      <div>0kcal</div>
      <div>{{ maxCal }}Kcal</div>
    </div>
    <div class="w-full bg-grey-250 h-1.5 rounded-sm">
      <div class="bg-yellow-550 h-1.5 rounded-sm" :style="totalCalories"></div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    maxCal() {
      return this.$store.state.maxCal
    },
    listaPedidos() {
      return this.$store.state.pedido
    },
    totalCalories() {
      var msgTotal = this.listaPedidos.reduce(function (prev, cur) {
        return prev + cur.cal
      }, 0)
      return 'width:' + (msgTotal / this.maxCal) * 100 + '%'
    },
  },
}
</script>