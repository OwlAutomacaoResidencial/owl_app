<template>
  <q-page id="back">
    <div id="rootSensor" class="text-center">
      <img id="rootImg" :src="avatar" alt="Avatar">
      <div id="rootLabel" class="text-white">Jardim</div>
    </div>
    <div class="bg-primary text-white text-center full-width shadow-2 favoriteLabel">Usuários do ambiênte</div>
    <div class="full-width full-heigth">
      <q-list no-border>
        <q-item class="bg-white shadow-5 margin" v-for="x in 5" :key="x">
          <q-item-side>
            <img class="avatar" :src="user" alt="Avatar">
          </q-item-side>
          <q-item-main>
            <q-item-tile class="label" label>Guilherme Beidaki</q-item-tile>
            <q-item-tile sublabel>(Permissão)</q-item-tile>
          </q-item-main>
          <q-item-side right><q-btn flat round dense icon="close" /></q-item-side>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'AuthComodo',
  data () {
    return {
      avatar: require('../assets/leaves.png'),
      user: require('../assets/user.png')
    }
  }
}
</script>

<style scoped>
#back {
  background-color: #DBDBDB;
}
#rootSensor {
  padding: 10px;
  background-color: #393939;
}
#rootImg {
  width: 80px;
  height: 80px;
  display: block;
  margin: 0 auto;
}
#rootLabel {
  font-size: 18px;
  margin-top: 10px;
}
.avatar {
  width: 50px;
  height: 50px;
}
.favoriteLabel {
  font-weight: 200;
  padding: 5px;
}
.margin {
  margin: 5px 0;
}
.label {
  font-size: calc(12px + 0.8vw);
}
</style>
