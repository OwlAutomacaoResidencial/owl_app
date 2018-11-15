<template>
  <div id="background" class="fullBack">
    <div id="blueBack" class="fullBack">
      <div id="logoPadding"><img id="logo" :src="logo" alt="Logo"></div>
      <div id="box" class="bg-white shadow-10">
        <span id="label" class="block text-center">Login</span>
        <q-input v-model="email" color="secondary" type="email" float-label="Usuário" />
        <q-input v-model="password" color="secondary" type="password" float-label="Senha" />
        <q-btn flat no-caps label="Esqueci minha senha" color="secondary" id="forgotPassword" to="/forgot" exact />
        <q-btn id="loginBtn" no-caps label="Entrar na minha conta" color="primary" class="block full-width" @click="login" />
        <q-btn id="registrerBtn" flat no-caps label="Ainda não tenho conta" color="secondary" class="block full-width" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginLayout',
  data () {
    return {
      email: '',
      password: '',
      logo: require('../assets/logo.png')
    }
  },
  methods: {
    login () {
      this.$q.loading.show()
      setTimeout(() => {
        this.$q.loading.hide()
        this.$router.push('/app')
      }, 2000)
    }
  },
  created () {
    // this.$store.dispatch('user/login', { login: 'guibperes@gmail.com', passwd: '1234' })
    // this.$store.dispatch('user/registrer', { email: 'guibperes@gmail.com', senha: '1234', nome: 'Guilherme Beidaki' })
  }
}
</script>

<style scoped>
#background {
  background-image: url('../assets/background.jpg');
  display: block;
  background-position: center;
  background-size: cover;
  object-fit: cover;
}
#blueBack {
  background-color: rgba(16, 58, 90, 0.8);
}
#logo {
  width: 150px;
  height: 90px;
  display: block;
  margin: 0 auto;
}
#logoPadding {
  padding-top: 35px;
  padding-bottom: 60px;
}
#box {
  margin: 0 30px;
  border-radius: 6px;
  padding: 15px;
}
#forgotPassword {
  padding-left: 0;
  padding-top: 15px;
  font-weight: 400;
}
#loginBtn {
  margin-top: 50px;
  border-radius: 0;
  padding: 15px;
}
#registrerBtn {
  margin-top: 10px;
  font-weight: 300;
}
#label {
  font-size: 18px;
  font-weight: 300;
  color: #555;
}
.fullBack {
  width: 100vw;
  height: 100vh;
}
</style>
