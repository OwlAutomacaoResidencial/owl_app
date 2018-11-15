<template>
  <q-page>
    <div id="rootSensor" class="text-center">
      <img id="rootImg" :src="user" alt="Avatar">
      <div id="rootLabel" class="text-white">Guilherme Beidaki</div>
      <div id="rootLabelPermission" class="text-white">(Permissão)</div>
    </div>
    <div class="bg-primary text-white text-center full-width shadow-2 favoriteLabel">Dados do usuário</div>
    <div class="full-width full-heigth">
      <q-list no-border>
        <q-item>
          <q-item-main>
            <q-item-tile class="text-secondary" label>Dados Pessoais</q-item-tile>
            <q-item-tile class="itemContent" sublabel>Nome do Perfil</q-item-tile>
            <q-item-tile sublabel>Nome do usuário</q-item-tile>
          </q-item-main>
        </q-item>
        <q-item>
          <q-item-main>
            <q-item-tile class="itemContent" sublabel>E-mail</q-item-tile>
            <q-item-tile sublabel>email@email.com</q-item-tile>
          </q-item-main>
        </q-item>
        <q-item>
          <q-item-main>
            <q-item-tile class="itemContent" sublabel>Data de nascimento</q-item-tile>
            <q-item-tile sublabel>17/12/1998</q-item-tile>
          </q-item-main>
        </q-item>
        <q-item>
          <q-item-main>
            <q-item-tile class="itemContent" sublabel>Gênero</q-item-tile>
            <q-item-tile sublabel>Masculino</q-item-tile>
          </q-item-main>
        </q-item>
      </q-list>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'AuthUser',
  data () {
    return {
      user: require('../assets/user.png')
    }
  }
}
</script>

<style scoped>
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
#rootLabelPermission {
  margin-top: 5px;
  font-size: 14px;
  font-weight: 300;
}
.favoriteLabel {
  font-weight: 200;
  padding: 5px;
}
.itemContent {
  color: #000;
  font-size: 18px;
  font-weight: 300;
  margin-top: 10px;
}
</style>
