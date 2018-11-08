<template>
  <q-page id="back">
    <div id="firstLabel" class="full-width text-center text-white bg-primary shadow-2 labelComodo">Ambiente Externo</div>
    <div>teste</div>
    <div class="full-width text-center text-white bg-primary shadow-2 labelComodo marginLabel">Ambiente Interno</div>
    <div>teste</div>
  </q-page>
</template>

<script>
export default {
  name: 'Sensors',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
#back {
  background-color: #DBDBDB;
}
#firstLabel {
  margin-bottom: 50px;
}
.labelComodo {
  font-weight: 200;
  padding: 5px;
}
.marginLabel {
  margin: 50px 0;
}
</style>
