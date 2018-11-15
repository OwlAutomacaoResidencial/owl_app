export default {
  state: {
  },
  mutations: {
  },
  getters: {
  },
  actions: {
    create ({ commit }, data) {
      // let id = data.id
      delete data.id
      this.axios.put('comodo', data)
        .then(res => {
          console.log(res.data)
        })
        .catch(err => {
          console.log(err.response)
        })
    }
  }
}
