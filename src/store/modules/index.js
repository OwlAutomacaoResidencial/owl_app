import camelCase from 'lodash/camelCase'
const requireModule = require.context('.', false, /\.js$/)
const modules = {}

requireModule.keys().forEach(file => {
  if (file === './index.js') return
  const moduleName = camelCase(file.replace(/(\.\/|\.js)/g, ''))
  modules[moduleName] = {
    namespaced: true,
    ...requireModule(file).default
  }
})
export default modules
