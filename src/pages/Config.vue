<template>
  <q-page>
    <q-list no-border>
      <q-item v-ripple>
        <q-item-main>
          <q-item-tile class="text-primary" label>Perfil</q-item-tile>
          <q-item-tile class="itemContent" sublabel>Mudar as configurações do seu perfil</q-item-tile>
        </q-item-main>
      </q-item>
      <q-item-separator />
      <q-item v-ripple>
        <q-item-main>
          <q-item-tile class="text-primary" label>Convidar usuários</q-item-tile>
          <q-item-tile class="itemContent" sublabel>Convidar usuários</q-item-tile>
          <q-item-tile sublabel>Convidar usuários para controlar os sensores da sua residência</q-item-tile>
        </q-item-main>
      </q-item>
      <q-item-separator />
      <q-item>
        <q-item-main>
          <q-item-tile class="text-primary" label>Notificações</q-item-tile>
          <q-item-tile class="itemContent" sublabel>Mostrar notificações do aplicativo</q-item-tile>
          <q-item-tile sublabel>Mostrar alertas informando as próximas ações a serem executadas</q-item-tile>
        </q-item-main>
        <q-item-side right><q-toggle v-model="notifications" /></q-item-side>
      </q-item>
      <q-item-separator />
      <q-item v-ripple>
        <q-item-main>
          <q-item-tile class="text-primary" label>Ajuda</q-item-tile>
          <q-item-tile class="itemContent" sublabel>Entre em contato com a empresa</q-item-tile>
        </q-item-main>
      </q-item>
      <q-item-separator />
      <q-item v-ripple>
        <q-item-main>
          <q-item-tile class="text-primary" label>Sobre</q-item-tile>
          <q-item-tile class="itemContent" sublabel>Sobre o aplicativo</q-item-tile>
        </q-item-main>
      </q-item>
      <q-item-separator />
    </q-list>
  </q-page>
</template>

<script>
export default {
  name: 'ConfigPage',
  data () {
    return {
      notifications: false
    }
  }
}
</script>

<style scoped>
.itemContent {
  color: #000;
  font-size: 18px;
  font-weight: 300;
  margin-top: 10px;
}
</style>
