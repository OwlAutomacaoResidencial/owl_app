import VueI18n from 'vue-i18n'
import us from '../lang/enUs'
import br from '../lang/ptBr'

const messages = {
  us: {
    message: us
  },
  br: {
    message: br
  }
}

export default ({ app, store, Vue }) => {
  Vue.use(VueI18n)

  store.i18n = app.i18n = new VueI18n({
    locale: 'br',
    messages: messages
  })
}
