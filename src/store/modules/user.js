export default {
  state: {
  },
  mutations: {
  },
  getters: {
  },
  actions: {
    login ({ commit }, data) {
      this.axios.post('login', data)
        .then(res => {
          console.log(res.data)
          window.localStorage.setItem('Token', res.data.token)
          this.axios.defaults.headers.common['Authorization'] = res.data.token
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    logout () {
      window.localStorage.clear()
      delete this.axios.defaults.headers.common['Authorization']
    },
    registrer ({ commit }, data) {
      this.axios.put('usuario', data)
        .then(res => {
          console.log(res.data)
        })
        .catch(err => {
          console.log(err.response)
        })
    }
  }
}
