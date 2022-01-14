<template>
  <div>
    <div
      class="
        w-11/12
        m-auto
        relative
        rounded-lg
        border border-grey-250
        py-6
        px-4
        mt-4
      "
      :class="statusComida"
    >
      <div class="flex">
        <div class="icon">
          <img
            :src="require(`~/assets/images/${comida.icon}.svg`)"
            alt=""
            class="carrito-img"
          />
        </div>
        <div class="content ml-4">
          <h1>{{ comida.title }}</h1>
          <p>{{ comida.cal }}</p>
        </div>
        <div
          class="
            creditos
            absolute
            w-32
            h-11
            rounded-lg
            flex
            items-center
            justify-center
          "
          :class="btnStatus"
        >
          <nuxt-link :to="`comidas/${comida.url}`">{{
            comida.creditos ? 'Agregar' : 'No tienes creditos'
          }}</nuxt-link>
        </div>
      </div>
    </div>
    <div v-if="pedidosCategoria">
      <div
        v-for="(item, index) in listaPedidos"
        :key="index"
        class="
          w-11/12
          m-auto
          relative
          rounded-lg
          border border-grey-250
          py-6
          px-4
          mt-4
        "
      >
        <div class="flex relative">
          <div>
            <img :src="item.image" alt="" class="carrito-img rounded-lg" />
          </div>
          <div class="content ml-4">
            <h2 class="font-semibold text-green-content">{{ item.title }}</h2>
            <p class="text-disabled text-xs mt-2">{{ item.cal }}Kcal</p>
          </div>
          <img
            @click="borrarPedido"
            src="~/assets/images/icon-delete.svg"
            alt=""
            class="absolute icon-delete cursor-pointer"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    comida: {
      type: Object,
      required: true,
    },
  },
  computed: {
    statusComida() {
      return this.comida.creditos ? 'enabled' : 'bg-bk-disabled'
    },
    btnStatus() {
      return this.comida.creditos ? 'bg-yellow-550' : 'bg-bk-disabled'
    },
    listaPedidos() {
      return this.$store.state.pedido
    },
    pedidosCategoria() {
      if (this.listaPedidos.length > 0) {
        if (this.listaPedidos[0].category === this.comida.url) {
          return true
        }
      }
    },
  },
  methods: {
    borrarPedido() {
      this.$store.commit('remove', this.listaPedidos)
    },
  },
}
</script>
<style lang="scss" scoped>
.creditos {
  right: 15px;
}
.carrito-img {
  width: 85px;
  height: 62px;
}
.icon-delete {
  right: 15px;
  top: calc(50% - 8px);
}
</style>