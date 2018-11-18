import router from '../../router'
import { Loading } from 'quasar'
export default {
  state: {
    data: {},
    list: []
  },
  mutations: {
    setData (state, data) {
      state.data = data.Usuario
    },
    setList (state, data) {
      state.list = data
    }
  },
  getters: {
    data: state => state.data
  },
  actions: {
    login ({ commit }, data) {
      Loading.show()
      this.axios.post('login', data)
        .then(res => {
          window.localStorage.setItem('Token', res.data.token)
          this.axios.defaults.headers.common['Authorization'] = res.data.token
          commit('setData', res.data)
          Loading.hide()
          router.push('/app')
        })
        .catch(err => {
          console.log(err)
        })
    },
    logout () {
      window.localStorage.clear()
      delete this.axios.defaults.headers.common['Authorization']
      router.push('/')
    },
    getAll ({ commit }) {
      this.axios.get('/usuarios')
        .then(res => {
          commit('setList', res.data)
        })
        .catch(err => {
          console.log(err)
        })
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
