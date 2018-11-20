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
    }
  },
  getters: {
    data: state => state.data,
    list: state => state.list
  },
  actions: {
    login ({ commit }, data) {
      Loading.show()
      this.axios.post('login', data)
        .then(res => {
          window.localStorage.setItem('Token', res.data.token)
          window.localStorage.setItem('UserId', res.data.Usuario.codigo)
          this.axios.defaults.headers.common['Authorization'] = res.data.token
          commit('setData', res.data)
          Loading.hide()
          router.push('/app')
        })
        .catch(err => {
          console.log(err)
          Loading.hide()
        })
    },
    logout () {
      window.localStorage.clear()
      delete this.axios.defaults.headers.common['Authorization']
      router.push('/')
    },
    getAll ({ commit }) {
      this.axios.get('usuarios')
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
