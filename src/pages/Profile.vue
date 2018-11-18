<template>
  <q-list no-border>
    <q-item v-ripple>
      <q-item-main>
        <q-item-tile class="text-primary" label>Foto</q-item-tile>
        <q-item-tile class="itemContent" sublabel>Mudar sua foto do perfil</q-item-tile>
      </q-item-main>
    </q-item>
    <q-item-separator />
    <q-item v-ripple>
      <q-item-main>
        <q-item-tile class="text-primary" label>Dados pessoais</q-item-tile>
        <q-item-tile class="itemContent" sublabel>Nome do perfil</q-item-tile>
        <q-item-tile sublabel>{{ user.nome }}</q-item-tile>
      </q-item-main>
    </q-item>
    <q-item v-ripple>
      <q-item-main>
        <q-item-tile class="itemContent" sublabel>Tipo do Perfil</q-item-tile>
        <q-item-tile sublabel>{{ user.perfil }}</q-item-tile>
      </q-item-main>
    </q-item>
    <q-item v-ripple>
      <q-item-main>
        <q-item-tile class="itemContent" sublabel>E-mail</q-item-tile>
        <q-item-tile sublabel>{{ user.login }}</q-item-tile>
      </q-item-main>
    </q-item>
    <!--q-item v-ripple>
      <q-item-main>
        <q-item-tile class="itemContent" sublabel>Data de nascimento</q-item-tile>
        <q-item-tile sublabel>17/12/1998</q-item-tile>
      </q-item-main>
    </q-item>
    <q-item v-ripple>
      <q-item-main>
        <q-item-tile class="itemContent" sublabel>Gênero</q-item-tile>
        <q-item-tile sublabel>Masculino</q-item-tile>
      </q-item-main>
    </q-item-->
    <q-item-separator />
    <q-item @click.native="$store.dispatch('user/logout')" v-ripple>
      <q-item-main>
        <q-item-tile class="text-primary" color="negative" label>Sair</q-item-tile>
      </q-item-main>
    </q-item>
  </q-list>
</template>

<script>
export default {
  name: 'ProfilePage',
  computed: {
    user () {
      return this.$store.getters['user/data']
    }
  }
}
</script>

<style scoped>
.itemContent {
  color: #000;
  font-size: 18px;
  font-weight: 400;
  margin-top: 10px;
}
</style>
