export default {
  state: {
    list: [],
    externo: [],
    interno: []
  },
  mutations: {
    setList (state, data) {
      let list = []
      let aux = []
      data.forEach(e => {
        aux.push(e)
        if (aux.length === 3) {
          list.push(aux)
          aux = []
        }
      })
      if (aux.length > 0) {
        list.push(aux)
      }
      state.list = list
    },
    setExterno (state, data) {
      let array = data.filter(e => e.Externo)
      let list = []
      let aux = []
      array.forEach(e => {
        aux.push(e)
        if (aux.length === 3) {
          list.push(aux)
          aux = []
        }
      })
      if (aux.length > 0) {
        list.push(aux)
      }
      state.externo = list
    },
    setInterno (state, data) {
      let array = data.filter(e => !e.Externo)
      let list = []
      let aux = []
      array.forEach(e => {
        aux.push(e)
        if (aux.length === 3) {
          list.push(aux)
          aux = []
        }
      })
      if (aux.length > 0) {
        list.push(aux)
      }
      state.interno = list
    }
  },
  getters: {
    list: state => state.list,
    externo: state => state.externo,
    interno: state => state.interno
  },
  actions: {
    get ({ commit }) {
      this.axios.get('comodos')
        .then(res => {
          commit('setList', res.data)
          commit('setExterno', res.data)
          commit('setInterno', res.data)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
