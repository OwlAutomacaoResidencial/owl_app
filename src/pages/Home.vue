<template>
  <q-page class="backgroundGrey">
    <div class="row" style="background-color: #1D2026;">
      <div class="col-6 text-center text-white innerPadding">
        <img :src="profileImg" alt="Profile" id="profileImage">
        <span id="userName" class="block"><b>Guilherme Beidaki Peres</b></span>
        <span class="block">Administrador</span>
      </div>
      <div class="col-6 text-white">
        <q-list no-border>
          <q-item>
            <q-item-side icon="code" />
            <q-item-main label="Temperatura" sublabel="aqui em baixo" />
          </q-item>
          <q-item>
            <q-item-side icon="code" />
            <q-item-main label="Umidade" sublabel="aqui em baixo" />
          </q-item>
        </q-list>
      </div>
    </div>
    <div class="full-width text-center text-white bg-primary innerPadding">Meus Favoritos</div>
    <div class="full-width listPadding">
      <div class="cardPadding" v-for="x in 10" :key="x">
        <q-card class="bg-white">
          <q-card-main class="row items-center">
            <div class="col-2 self-center"><img id="image" :src="photo" alt="Icon"></div>
            <div id="titleSensor" class="col-8">Irrigação</div>
            <div class="col-2"><q-toggle v-model="toggle" /></div>
          </q-card-main>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      toggle: false,
      photo: '',
      profileImg: ''
    }
  }
}
</script>

<style scoped>
#image {
  display: block;
  width: 90%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
}
#profileImage {
  display: block;
  width: 40%;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 5px;
}
#titleSensor {
  padding-left: 10px;
  font-size: 16px;
}
#userName {
  font-size: 18px;
}
.backgroundGrey {
  background-color: #F4F4F4;
}
.innerPadding {
  padding: 15px;
}
.cardPadding {
  padding: 6px;
}
.listPadding {
  padding: 5px;
}
</style>
