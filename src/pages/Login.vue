<template>
    <div id="login">
        <h1 id="title">Owl</h1>
        <div id="email">
          <input type="text" name="username" v-model="input.username" placeholder="E-mail" />
        </div>
        <h2 id="senha"><input type="password" name="password" v-model="input.password" placeholder="Senha" /></h2>
        <h2 id="entrar"><button type="button" v-on:click="login()">Entrar</button></h2>
    </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      input: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      if (this.input.username !== '' && this.input.password !== '') {
        if (this.input.username === this.$parent.mockAccount.username && this.input.password === this.$parent.mockAccount.password) {
          this.$emit('authenticated', true)
          this.$router.replace({ name: 'secure' })
        } else {
          console.log('The username and / or password is incorrect')
        }
      } else {
        console.log('A username and password must be present')
      }
    }
  }
}
</script>

<style scoped>
    #login {
        width: 410px;
        height: 900px;
        border: 5px solid #CCCCCC;
        background-color: #103A5A;
        margin: auto;
        margin-top: 0px;
        padding: 60px;
    }
    @font-face {
      font-family:Bromello;
      src: url(../assets/bromello.ttf);
    }
    #title{
     font-family:Bromello;
     color: white;
     margin: 30px;
     padding: 50px;
    }
    #email{
     border: 500px;
     font-family:Arial;
     color: white;
     width: 410px;
     height: 5px;
     padding: 5px;
     margin: auto;
    }
    #senha{
     font-family:Arial;
     border-radius: 10px;
     color: white;
     margin: 30px;
     padding: 50px;
    }
    #entrar{
     font-family:Arial;
     color: #405E77;
     margin: 30px;
     padding: 50px;
    }
</style>
