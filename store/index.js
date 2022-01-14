/* All states default */
export const state = () => ({
  maxCal: 2000,
  pedido: [],
})
/* All states mutations */
export const mutations = {
  add(state, payload) {
    state.pedido.push(payload)
    this.$router.push('/')
  },
  remove(state, payload) {
    const i = state.pedido.map((item) => item.id).indexOf(payload)
    state.pedido.splice(i, 1)
  },
}
/* All states getters */
const getters = {}
/* All states actions */
const actions = {}
/* Export all stores */
export default {
  state,
  mutations,
  getters,
  actions,
}
