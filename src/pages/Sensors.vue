<template>
  <q-page id="back">
    <div id="firstLabel" class="full-width text-center text-white bg-primary shadow-2 labelComodo">Ambiente Externo</div>
    <q-carousel class="shadow-2" infinite arrows>
      <q-carousel-slide class="bg-white row slidePadding" v-for="(slide, index) in externo" :key="index">
        <div class="col-4 text-center relative-position" v-for="item in slide" :key="item.idComodo" @click="sensorGo(item.idComodo)" v-ripple>
          <img :src="avatar" alt="Avatar" class="avatar">
          <div class="itemLabel">{{ item.nome }}</div>
        </div>
      </q-carousel-slide>
    </q-carousel>
    <div class="full-width text-center text-white bg-primary shadow-2 labelComodo marginLabel">Ambiente Interno</div>
    <q-carousel class="shadow-2" infinite arrows>
      <q-carousel-slide class="bg-white row slidePadding" v-for="(slide, index) in interno" :key="index">
        <div class="col-4 text-center relative-position" v-for="item in slide" :key="item.idComodo" @click="sensorGo(item.idComodo)" v-ripple>
          <img :src="avatar" alt="Avatar" class="avatar">
          <div class="itemLabel">{{ item.nome }}</div>
        </div>
      </q-carousel-slide>
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
  computed: {
    interno () {
      return this.$store.getters['comodos/interno']
    },
    externo () {
      return this.$store.getters['comodos/externo']
    }
  },
  methods: {
    sensorGo (id) {
      this.$router.push(`/app/sensor/${id}`)
    }
  },
  created () {
    this.$store.dispatch('comodos/get')
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
