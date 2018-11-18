export default {
  state: {
    temperatura: 0,
    umidade: 0,
    ocorrencias: []
  },
  mutations: {
    setTemperatura (state, data) {
      state.temperatura = data.temperatura
    },
    setUmidade (state, data) {
      state.umidade = data.umidade
    },
    setOcorrencias (state, data) {
      data.forEach(e => {
        let splitDate = e.dataHora.split(' ')
        splitDate[0] = splitDate[0].split('-').reverse().join('/')
        splitDate[1] = splitDate[1].split(':')
        splitDate[1].pop()
        splitDate[1] = splitDate[1].join(':')
        e.dataHora = splitDate.join(' ')
      })
      state.ocorrencias = data
    }
  },
  getters: {
    temperatura: state => state.temperatura,
    umidade: state => state.umidade,
    ocorrencias: state => state.ocorrencias
  },
  actions: {
    temperatura ({ commit }) {
      this.axios.get('temperaturaAtual')
        .then(res => {
          commit('setTemperatura', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    umidade ({ commit }) {
      this.axios.get('umidadeAtual')
        .then(res => {
          commit('setUmidade', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    ocorrencias ({ commit }) {
      this.axios.get('ocorrencias')
        .then(res => {
          commit('setOcorrencias', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
