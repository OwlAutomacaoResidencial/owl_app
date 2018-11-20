import axios from 'axios'

let token = window.localStorage.getItem('Token')
axios.defaults.baseURL = 'http://192.168.0.30:18080/'
if (token !== null) {
  axios.defaults.headers.common['Authorization'] = token
}
axios.defaults.headers.common['Content-Type'] = 'application/json'

export default ({ store }) => {
  store.axios = axios
}
