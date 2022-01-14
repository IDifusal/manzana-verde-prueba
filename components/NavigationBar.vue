<template>
  <div class="navbar absolute grid grid-cols-5 justify-center text-center">
    <ul
      v-for="(item, index) in navItems"
      :key="index"
      class="relative list-none pt-5"
      :class="item.class"
    >
      <li class="flex flex-col justify-center items-center text-10">
        <div class="icon-box h-5 w-5">
          <img
            :src="require(`~/assets/images/navbar/${item.icon}.svg`)"
            alt=""
          />
        </div>
        <p :class="item.class === 'active' ? 'text-green-content' : ''">
          {{ item.title }}
        </p>
      </li>
    </ul>
    <div
      class="
        icon-add
        absolute
        w-12
        h-12
        bg-green-content
        rounded-full
        flex flex-col
        justify-center
        items-center
        text-10
      "
    >
      <img :src="require(`~/assets/images/navbar/add-icon.svg`)" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      navItems: [
        {
          url: '',
          title: 'Hoy',
          icon: 'calendar',
          class: '',
        },
        {
          url: '',
          title: 'Mis pedidos',
          icon: 'bell',
          class: 'active',
        },
        {
          url: '',
          title: '',
          icon: 'add-icon',
          class: '',
        },
        {
          url: '',
          title: 'Comida',
          icon: 'spoon',
          class: '',
        },
        {
          url: '',
          title: 'Coach',
          icon: 'coach',
          class: '',
        },
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: 70px;
  position: sticky;
  bottom: 0;
  background: url('~assets/images/bg-navbar.svg');
  background-size: contain !important;
}
.text-10 {
  font-size: 10px;
}
.icon-add {
  bottom: 35px;
  left: calc(50% - 25px);
}
</style>