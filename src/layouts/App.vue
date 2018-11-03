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
        <div class="col-2">
          <img :src="images.sensor" alt="Sensores" class="iconFooter">
        </div>
        <div class="col-2">
          <img :src="images.permission" alt="Sensores" class="iconFooter">
        </div>
        <div class="col-4">
          <img :src="images.home" alt="Sensores" class="iconFooter">
        </div>
        <div class="col-2">
          <img :src="images.ocorrencia" alt="Sensores" class="iconFooter">
        </div>
        <div class="col-2">
          <img :src="images.config" alt="Sensores" class="iconFooter">
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
  padding: 10px;
}
.iconFooter {
  width: 25px;
  height: 25px;
}
</style>
