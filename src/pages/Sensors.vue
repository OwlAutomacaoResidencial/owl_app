<template>
  <q-page id="back">
    <div id="firstLabel" class="full-width text-center text-white bg-primary shadow-2 labelComodo">Ambiente Externo</div>
    <q-carousel class="shadow-2" infinite>
      <q-carousel-slide class="bg-white row slidePadding" v-for="x in 3" :key="x">
        <div class="col-4 text-center relative-position" v-for="x in 3" :key="x" @click="sensorGo('10')" v-ripple>
          <img :src="avatar" alt="Avatar" class="avatar">
          <div class="itemLabel">Jardim</div>
        </div>
      </q-carousel-slide>
      <!--q-carousel-control slot="control-nav" slot-scope="carousel" :offset="[5, 50]">
        <q-btn round dense flat @click="carousel.previous" :disable="!carousel.canGoToPrevious" text-color="grey-7" icon="keyboard_arrow_left" class="float-left" />
        <q-btn round dense flat @click="carousel.next" :disable="!carousel.canGoToNext" text-color="grey-7" icon="keyboard_arrow_right" class="float-right" />
      </q-carousel-control-->
    </q-carousel>
    <div class="full-width text-center text-white bg-primary shadow-2 labelComodo marginLabel">Ambiente Interno</div>
    <q-carousel class="shadow-2" infinite>
      <q-carousel-slide class="bg-white row slidePadding" v-for="x in 3" :key="x">
        <div class="col-4 text-center relative-position" v-for="x in 3" :key="x" @click="sensorGo('10')" v-ripple>
          <img :src="avatar" alt="Avatar" class="avatar">
          <div class="itemLabel">Jardim</div>
        </div>
      </q-carousel-slide>
      <!--q-carousel-control slot="control-nav" slot-scope="carousel" :offset="[5, 50]">
        <q-btn round dense flat @click="carousel.previous" :disable="!carousel.canGoToPrevious" text-color="grey-7" icon="keyboard_arrow_left" class="float-left" />
        <q-btn round dense flat @click="carousel.next" :disable="!carousel.canGoToNext" text-color="grey-7" icon="keyboard_arrow_right" class="float-right" />
      </q-carousel-control-->
    </q-carousel>
  </q-page>
</template>

<script>
export default {
  name: 'Sensors',
  data () {
    return {
      avatar: require('../assets/leaves.png')
    }
  },
  methods: {
    sensorGo (id) {
      this.$router.push(`/app/sensor/${id}`)
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
.avatar {
  width: 60px;
  height: 60px;
  margin: 0 auto;
}
.itemLabel {
  margin-top: 10px;
}
.slidePadding {
  padding: 20px 10px;
}
#arrow {
  background: none;
}
</style>
