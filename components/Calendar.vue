<template>
  <div class="py-2.5 border-b border-grey-250">
    <div class="w-10/12 m-auto">
      <div class="grid grid-cols-5">
        <div
          v-for="(day, index) in week"
          :key="index"
          :class="day.dia === date ? 'bg-yellow-550 rounded-lg' : 'unselected'"
          class="text-center py-2"
        >
          <p class="text-sm">
            {{ day.nombre }}
          </p>
          <p class="text-xl font-semibold">
            {{ day.dia }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      date: '',
    }
  },
  computed: {
    checkToday() {
      if (this.date == this.week) {
        return 'bg-red'
      }
    },
    week() {
      return [
        {
          dia: this.date,
          nombre: 'Lun',
        },
        {
          dia: this.date + 1,
          nombre: 'Mar',
        },
        {
          dia: this.date + 2,
          nombre: 'Mie',
        },
        {
          dia: this.date + 3,
          nombre: 'Jue',
        },
        {
          dia: this.date + 4,
          nombre: 'Vie',
        },
      ]
    },
  },
  beforeMount() {
    let date = new Date()
    this.date = date.getDate()
  },
}
</script>
<style lang="scss" scoped>
.unselected {
  color: #c9c9c9 !important;
}
</style>