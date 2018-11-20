<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar color="tertiary">
        <q-btn v-if="this.$route.meta.showBack" flat dense icon="arrow back" @click="$router.back()" />
        <q-toolbar-title>{{ this.$route.meta.title }}</q-toolbar-title>
      </q-toolbar>
    </q-layout-header>
    <q-layout-footer>
      <div id="footer" class="row full-width bg-tertiary text-white text-center">
        <div class="colFooter relative-position full-height" :class="{ selected: item.selected }" @click="changeRoute(item.id, item.route)" v-ripple v-for="item in footerOptions" :key="item.id">
          <img :src="item.img" class="iconFooter">
          <span class="block fontFooterSelector">{{ item.nome }}</span>
        </div>
      </div>
    </q-layout-footer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'AppLayout',
  data () {
    return {
      footerOptions: [
        { id: 1, nome: 'Sensores', img: require('../assets/lightlist.png'), route: '/app/sensors', selected: false },
        { id: 2, nome: 'Permissões', img: require('../assets/permissions.png'), route: '/app/comodosAuth', selected: false },
        { id: 3, nome: 'Início', img: require('../assets/home.png'), route: '/app', selected: true },
        { id: 4, nome: 'Ocorrências', img: require('../assets/newspaper.png'), route: '/app/logs', selected: false },
        { id: 5, nome: 'Configurações', img: require('../assets/settings.png'), route: '/app/config', selected: false }
      ]
    }
  },
  methods: {
    changeRoute (id, route) {
      let oldItem = this.footerOptions.findIndex(e => e.selected && e.id !== id)
      this.footerOptions[oldItem].selected = false
      this.footerOptions[id - 1].selected = true
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
#footer {
  padding: 0;
}
.colFooter {
  width: calc(100vw/5);
  padding: 5px;
}
.selected {
  background-color: rgba(255, 255, 255, 0.2);
  border-top: 2px solid white;
}
.iconFooter {
  width: 25px;
  height: 25px;
}
.fontFooterSelector {
  font-size: calc(8px + 0.5vw);
  font-weight: 300;
}
</style>
