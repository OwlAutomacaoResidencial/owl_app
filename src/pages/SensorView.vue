<template>
  <q-page id="back">
    <div id="rootSensor" class="text-center">
      <img id="rootImg" :src="avatar" alt="Avatar">
      <div id="rootLabel" class="text-white">Jardim</div>
    </div>
    <div class="bg-primary text-white text-center full-width shadow-2 favoriteLabel">Meus sensores favoritos</div>
    <div class="full-width full-heigth">
      <q-list no-border>
        <q-item id="item" class="bg-white shadow-5 margin" v-for="x in 5" :key="x">
          <q-item-side>
            <q-btn flat dense round size="lg" icon="favorite" :color="favoriteIcon ? 'negative' : 'grey'" @click="favoriteIcon = !favoriteIcon" />
            <img class="avatar" :src="avatar" alt="Avatar">
          </q-item-side>
          <q-item-main>
            <q-item-tile class="label" label>Lâmpada</q-item-tile>
            <q-item-tile sublabel>Sala</q-item-tile>
          </q-item-main>
          <q-item-side right><q-toggle color="primary" v-model="toggle" /></q-item-side>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'SensorView',
  data () {
    return {
      avatar: require('../assets/leaves.png'),
      toggle: false,
      favoriteIcon: true
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
#item {
  padding-left: 5px;
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
