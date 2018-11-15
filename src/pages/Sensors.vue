<template>
  <q-page id="back">
    <div id="firstLabel" class="full-width text-center text-white bg-primary shadow-2 labelComodo">Ambiente Externo</div>
    <q-carousel class="shadow-2" infinite>
      <q-carousel-slide class="bg-white row" v-for="x in 3" :key="x">
        <div class="col-4 text-center">
          <img :src="avatar" alt="Avatar" class="block">
          <span>Teste</span>
        </div>
      </q-carousel-slide>
    </q-carousel>
    <div class="full-width text-center text-white bg-primary shadow-2 labelComodo marginLabel">Ambiente Interno</div>
    <q-carousel class="shadow-2" infinite>
      <q-carousel-slide class="bg-white" v-for="x in 3" :key="x">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab placeat qui consequatur, ad exercitationem nihil laborum dicta nulla architecto. Consequuntur amet quo nostrum. Fugit vitae sint autem, ipsa non molestiae?
      </q-carousel-slide>
    </q-carousel>
  </q-page>
</template>

<script>
export default {
  name: 'Sensors',
  data () {
    return {
      avatar: import('../assets/leaves.png')
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
.slidePadding {
  padding: 10px;
}
</style>
