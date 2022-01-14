<template>
  <div>
    <TopBar :detalle="true" />
    <div class="px-4 mt-7 pb-20">
      <div
        class="img-plato h-44 rounded-xl"
        :style="{
          backgroundImage: `url(${plato.image})`,
        }"
      ></div>
      <h3 class="text-lg font-bold mt-4">
        {{ plato.title }}
      </h3>
      <div
        v-if="plato.recomendado"
        class="
          mt-2
          w-24
          h-6
          rounded
          featured
          bg-green-bg
          flex
          justify-center
          items-center
          text-green-content
          font-semibold
          text-10
        "
      >
        Recomendado
      </div>
      <div class="mt-4">
        <span class="font-medium">Ingredientes: </span>{{ plato.ingredients }}
      </div>
      <div
        class="
          details
          grid grid-cols-4
          border border-grey-250
          rounded-lg
          relative
          py-2.5
          mt-5
        "
      >
        <div class="plato_style">
          <p>Kcals</p>
          <span>{{ plato.datos.cal }}</span>
        </div>
        <div class="plato_style">
          <p>Kcals</p>
          <span>{{ plato.datos.grasa }}g</span>
        </div>
        <div class="plato_style">
          <p>Kcals</p>
          <span>{{ plato.datos.carbo }}g</span>
        </div>
        <div class="plato_style">
          <p>Kcals</p>
          <span>{{ plato.datos.prote }}g</span>
        </div>
      </div>
      <div class="icons-platos grid grid-cols-3 mt-5 gap-y-3">
        <div v-if="plato.icons.low_sodio">
          <img src="~/assets/images/platos/low-sodium.svg" alt="" />
          Bajo en sodio
        </div>
        <div v-if="plato.icons.low_azucar">
          <img src="~/assets/images/platos/low-sugar.svg" alt="" />
          Bajo en azúcar
        </div>
        <div v-if="plato.icons.low_glutem">
          <img src="~/assets/images/platos/low-gluten.svg" alt="" />
          Bajo en gluten
        </div>
        <div v-if="plato.icons.no_lactosa">
          <img src="~/assets/images/platos/low-lactose.svg" alt="" />
          Sin lactosa
        </div>
        <div v-if="plato.icons.bajo_carbo">
          <img src="~/assets/images/platos/low-carbs.svg" alt="" />
          Bajo en carbo
        </div>
      </div>
      <div
        class="
          mt-6
          recomendado
          border border-grey-250
          rounded-lg
          flex
          p-2.5
          relative
        "
      >
        <div
          class="featured-image"
          :style="{
            backgroundImage: `url(${recomendados[0].image})`,
          }"
        ></div>
        <div class="ml-2.5 font-medium">
          {{ recomendados[0].title }}
          <div
            v-if="recomendados[0].recomendado"
            class="
              my-1
              w-24
              h-6
              rounded
              featured
              bg-green-bg
              flex
              justify-center
              items-center
              text-green-content
              font-semibold
              text-10
            "
          >
            Recomendado
          </div>
          <span class="text-xs text-info-color flex"
            >Kcal{{ recomendados[0].cal }}
            <img src="~/assets/images/info-icon.svg" alt="" class="ml-1"
          /></span>
        </div>
        <nuxt-link
          :to="`/comidas/${recomendados[0].category}/${recomendados[0].slug}`"
        >
          <div
            class="
              btn-add
              bg-yellow-550
              rounded-lg
              absolute
              flex
              items-center
              justify-center
              text-grey-50
              font-semibold
            "
          >
            Agregar
          </div></nuxt-link
        >
      </div>
      <div class="checkboxes flex flex-col">
        <label class="inline-flex items-center mt-3">
          <input
            v-model="detallesPedido.camote"
            type="checkbox"
            class="form-checkbox h-3 w-3 text-green-600 rounded-sm"
          /><span class="ml-2 text-gray-700">Camote</span>
        </label>
        <label class="inline-flex items-center mt-3">
          <input
            v-model="detallesPedido.papa"
            type="checkbox"
            class="form-checkbox h-3 w-3 text-green-600 rounded-sm"
          /><span class="ml-2 text-gray-700">Papa</span>
        </label>
        <label class="inline-flex items-center mt-3">
          <input
            v-model="detallesPedido.arroz"
            type="checkbox"
            class="form-checkbox h-3 w-3 text-green-600 rounded-sm"
          /><span class="ml-2 text-gray-700">Arroz</span>
        </label>
      </div>
      <div class="relative mt-5">
        <div class="w-full border-t border-grey-250"></div>
      </div>
      <div class="add-detallesPedido">
        <label class="inline-flex items-center mt-3">
          <input
            v-model="detallesPedido.picante"
            type="checkbox"
            class="form-checkbox h-3 w-3 text-green-600 rounded-sm"
          /><span class="ml-2 text-gray-700">Incluir picante</span>
        </label>
        <button
          @click="agregarPedido()"
          class="
            bg-yellow-550
            hover:bg-check-green
            text-grey-50
            font-smibold
            py-4
            px-4
            rounded-lg
            d-block
            w-full
            mt-2
          "
        >
          Agregar al pedido
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import TopBar from '~/components/Comidas/TopBar'
import { mapMutations } from 'vuex'
export default {
  components: {
    TopBar,
  },
  async asyncData({ $content, params }) {
    const slug = params.slug
    const recomendados = await $content('platos/almuerzo').fetch()
    const plato = await $content('platos/almuerzo', slug).fetch()
    return {
      plato,
      recomendados,
    }
  },
  data() {
    return {
      detallesPedido: {
        camote: '',
        papa: '',
        arroz: '',
        picante: '',
      },
    }
  },
  computed: {
    pedidoConDetalles() {
      return Object.assign({}, this.plato, this.detallesPedido)
    },
    listaPedidos() {
      return this.$store.state.pedido
    },
  },
  methods: {
    agregarPedido() {
      this.$store.commit('add', this.pedidoConDetalles)
    },
  },
}
</script>
<style lang="scss" scoped>
.text-10 {
  font-size: 11.5px;
}
.details > div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
.plato_style {
  border-right: 1px solid #e8e8e8;
}

.plato_style > p {
  font-weight: 500;
  color: #a9a9a9;
}
.plato_style span {
  font-weight: 500;
  color: #35b266;
  font-size: 16px;
}
.icons-platos > div {
  display: flex;
  font-size: 12px;
}
.icons-platos img {
  margin-right: 5px;
}
.featured-image {
  width: 88px;
  height: 70px;
  background-size: cover;
  background-position: center;
}
.btn-add {
  width: 90px;
  height: 51px;
  right: 9px;
  top: calc(50% - 25px);
}
</style>
