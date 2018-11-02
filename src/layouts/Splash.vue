<template>
  <div id="background" class="fullBack">
    <div id="blueBack" class="fullBack">
      <div class="flex fixed-center">
        <img id="logo" :src="logo" alt="Logo">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SplashLayout',
  data () {
    return {
      logo: require('../assets/logo.png')
    }
  },
  created () {
    setTimeout(() => {
      this.$router.push('/login')
    }, 2000)
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
  width: 190px;
  height: 115px;
}
.fullBack {
  width: 100vw;
  height: 100vh;
}
</style>
