<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar color="tertiary">
        <q-btn v-if="this.$route.meta.showBack" flat dense icon="arrow back" />
        <q-toolbar-title>{{ this.$route.meta.title }}</q-toolbar-title>
        <q-btn v-if="this.$route.meta.showSearch" flat dense icon="search" />
      </q-toolbar>
    </q-layout-header>
    <q-layout-footer>
      <div id="footer" class="row full-width bg-tertiary text-white text-center">
        <div class="colFooter">
          <img :src="images.sensor" alt="Sensores" class="iconFooter">
          <span class="block fontFooterSelector">Sensores</span>
        </div>
        <div class="colFooter">
          <img :src="images.permission" alt="Sensores" class="iconFooter">
          <span class="block fontFooterSelector">Permissões</span>
        </div>
        <div class="colFooter">
          <img :src="images.home" alt="Sensores" class="iconFooter">
          <span class="block fontFooterSelector">Início</span>
        </div>
        <div class="colFooter">
          <img :src="images.ocorrencia" alt="Sensores" class="iconFooter">
          <span class="block fontFooterSelector">Ocorrências</span>
        </div>
        <div class="colFooter">
          <img :src="images.config" alt="Sensores" class="iconFooter">
          <span class="block fontFooterSelector">Configurações</span>
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
      images: {
        sensor: require('../assets/lightlist.png'),
        permission: require('../assets/permissions.png'),
        home: require('../assets/home.png'),
        ocorrencia: require('../assets/newspaper.png'),
        config: require('../assets/settings.png')
      }
    }
  }
}
</script>

<style scoped>
#footer {
  padding: 10px 0;
}
.colFooter {
  width: calc(100vw/5);
  padding: 5px;
  border-radius: 5px;
}
.colFooter:hover {
  background-color: rgba(255, 255, 255, 0.2);
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
