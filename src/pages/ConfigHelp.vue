<template>
  <q-page>
    <q-list no-border>
      <q-item>
        <q-item-main>
          <q-item-tile class="text-primary" label>Precisa de ajuda?</q-item-tile>
          <q-item-tile class="itemContent" sublabel>Encontrou algum problema ou precisa de ajuda?</q-item-tile>
          <q-item-tile sublabel>Mande-nos um e-mail para contato@owlautomacao.com.br ou contate-nos pela página do Facebook</q-item-tile>
        </q-item-main>
      </q-item>
      <q-item-separator />
      <q-item />
    </q-list>
  </q-page>
</template>

<script>
export default {
  name: 'ConfigHelpPage'
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
