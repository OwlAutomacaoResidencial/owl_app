<template>
  <q-page id="page">
    <q-list no-border>
      <q-item class="shadow-5 margin bg-white" v-for="x in 5" :key="x">
        <q-item-side>
          <img class="avatar" :src="avatar" alt="Avatar">
        </q-item-side>
        <q-item-main>
          <q-item-tile class="label" label>Lâmpada - Ligada</q-item-tile>
          <q-item-tile sublabel>Sala</q-item-tile>
        </q-item-main>
        <q-item-side right>
          <q-item-tile sublabel>10/12/2018 às 18:00</q-item-tile>
        </q-item-side>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  name: 'Logs',
  data () {
    return {
      avatar: require('../assets/leaves.png')
    }
  }
}
</script>

<style scoped>
#page {
  background-color: #DBDBDB;
}
.avatar {
  width: 50px;
  height: 50px;
}
.margin {
  margin: 5px 0;
}
.label {
  font-size: calc(12px + 0.8vw);
}
</style>
