<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar color="dark">
        <q-toolbar-title>{{ $route.meta.title }}</q-toolbar-title>
        <q-btn flat dense rounded icon="settings">
          <q-popover anchor="bottom right" self="top right">
            <q-list link no-border>
              <q-item v-close-overlay><q-item-main label="Editar seu perfil" /></q-item>
              <q-item v-close-overlay><q-item-main label="Configurações" /></q-item>
              <q-item v-close-overlay><q-item-main label="Ajuda" /></q-item>
              <q-item v-close-overlay><q-item-main label="Sobre" /></q-item>
              <q-item v-close-overlay><q-item-main label="Sair" /></q-item>
            </q-list>
          </q-popover>
        </q-btn>
      </q-toolbar>
    </q-layout-header>
    <q-layout-footer>
      <q-tabs color="dark" animated>
        <q-route-tab slot="title" icon="home" to="/app" exact />
        <q-route-tab slot="title" icon="history" to="/app/logs" exact />
        <q-route-tab slot="title" icon="lock" to="/app/comodosAuth" exact />
        <q-route-tab slot="title" icon="wifi" to="/app/sensors" exact />
      </q-tabs>
    </q-layout-footer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
</style>
