<template>
  <div id="background" class="fullBack">
    <div id="blueBack" class="fullBack">
      <div id="logoPadding"><img id="logo" :src="logo" alt="Logo"></div>
      <div id="box" class="bg-white shadow-10">
        <span id="label" class="block text-center">Esqueci minha senha</span>
        <span id="text" class="block text-center">Insira seu e-mail vinculado à sua conta para redefinir sua senha</span>
        <q-input id="emailInput" v-model="email" color="secondary" type="email" float-label="E-mail" />
        <q-btn id="loginBtn" no-caps label="Recuperar senha" color="primary" class="block full-width" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ForgotPasswordLayout',
  data () {
    return {
      email: '',
      logo: require('../assets/logo.png')
    }
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
#loginBtn {
  margin-top: 50px;
  border-radius: 0;
  padding: 15px;
}
#label {
  font-size: 18px;
  font-weight: 300;
  color: #555;
}
#text {
  font-size: 16px;
  font-weight: 300;
  padding-top: 15px;
}
#emailInput {
  margin-top: 25px;
  margin-bottom: 50px;
}
.fullBack {
  width: 100vw;
  height: 100vh;
}
</style>
