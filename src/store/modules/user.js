import axios from '../../plugins/axios'
export default {
  state: {
  },
  mutations: {
  },
  getters: {
  },
  actions: {
    login ({ commit }, data) {
      axios.post('login', data)
        .then(res => {
          console.log(res.data)
          window.localStorage.setItem('Token', res.data.token)
          axios.defaults.headers.common['Authorization'] = res.data.token
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    logout () {
      window.localStorage.clear()
      delete axios.defaults.headers.common['Authorization']
    },
    registrer ({ commit }, data) {
      axios.put('usuario', data)
        .then(res => {
          console.log(res.data)
        })
        .catch(err => {
          console.log(err.response)
        })
    }
  }
}
