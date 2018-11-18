export default {
  state: {
    temperatura: 0,
    umidade: 0
  },
  mutations: {
    setTemperatura (state, data) {
      state.temperatura = data.temperatura
    },
    setUmidade (state, data) {
      state.umidade = data.umidade
    }
  },
  getters: {
    temperatura: state => state.temperatura,
    umidade: state => state.umidade
  },
  actions: {
    temperatura ({ commit }) {
      this.axios.get('/temperaturaAtual')
        .then(res => {
          commit('setTemperatura', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    umidade ({ commit }) {
      this.axios.get('/umidadeAtual')
        .then(res => {
          commit('setUmidade', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
