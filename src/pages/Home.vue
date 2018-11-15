<template>
  <q-page id="back">
    <div id="rootUser" class="row">
      <div id="user" class="col-6 row items-center">
        <div class="col-12"><img id="userImg" :src="user" alt="User"></div>
        <div class="col-12 text-center text-white">
          <span id="userName" class="block">Nome Sobrenome</span>
          <span id="userLevel" class="block">(Nível do usuário)</span>
        </div>
      </div>
      <div id="labelTemp" class="col-6">
        <div class="col-12 row items-center marginItem">
          <div class="col-3"><img :src="temperatura" alt="Temperatura" class="avatar"></div>
          <div class="col-9 text-white paddingLabel lineThin labelUser">
            <span class="labelTemp">Temperatura 25ºC</span>
          </div>
        </div>
        <div class="col-12 row items-center marginItem">
          <div class="col-3"><img :src="umidade" alt="Temperatura" class="avatar"></div>
          <div class="col-9 text-white paddingLabel lineThin labelUser">
            <span class="labelTemp">Umidade 70%</span>
          </div>
        </div>
      </div>
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
  name: 'Home',
  data () {
    return {
      avatar: require('../assets/leaves.png'),
      temperatura: require('../assets/thermometer.png'),
      umidade: require('../assets/tear.png'),
      user: require('../assets/user.png'),
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
#rootUser {
  padding: 10px;
  background-color: #393939;
}
#item {
  padding-left: 5px;
}
#userImg {
  width: 80px;
  height: 80px;
  display: block;
  margin: 0 auto;
}
#userName {
  font-size: 18px;
}
#userLevel {
  font-size: 12px;
}
#user {
  padding-right: 15px;
  border-right: 1px solid #666;
}
.labelTemp {
  padding-left: 5px;
  font-size: calc(10px + 0.8vw);
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
.marginItem {
  margin: 10px 0;
}
.paddingLabel {
  padding-left: 10px;
}
.lineThin {
  font-weight: 300;
}
.labelUser {
  font-size: calc(10px + 1vw);
}
</style>
