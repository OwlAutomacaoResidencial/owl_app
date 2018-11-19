<template>
  <q-page id="back">
    <div id="firstLabel" class="full-width text-center text-white bg-primary shadow-2 labelComodo">Ambientes</div>
    <q-carousel class="shadow-2" infinite arrows>
      <q-carousel-slide class="bg-white row slidePadding" v-for="(slide, index) in comodos" :key="index">
        <div class="col-4 text-center relative-position" v-for="item in slide" :key="item.idComodo" @click="comodoGo(item.idComodo)" v-ripple>
          <img :src="avatar" alt="Avatar" class="avatar">
          <div class="itemLabel">{{ item.nome }}</div>
        </div>
      </q-carousel-slide>
    </q-carousel>
    <div class="full-width text-center text-white bg-primary shadow-2 labelComodo marginLabel">Usuários</div>
    <q-carousel class="shadow-2" infinite arrows>
      <q-carousel-slide class="bg-white row slidePadding" v-for="(slide, index) in userList" :key="index">
        <div class="col-4 text-center relative-position" v-for="item in slide" :key="item.codigo" @click="userGo(item.codigo)" v-ripple>
          <img :src="user" alt="Avatar" class="avatar">
          <div class="itemLabel">{{ item.nome }}</div>
          <div class="lineWeight">({{ item.perfil }})</div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </q-page>
</template>

<script>
export default {
  name: 'ComodosAuth',
  data () {
    return {
      avatar: require('../assets/leaves.png'),
      user: require('../assets/user.png')
    }
  },
  computed: {
    userList () {
      return this.$store.getters['user/list']
    },
    comodos () {
      return this.$store.getters['comodos/list']
    }
  },
  methods: {
    userGo (id) {
      this.$router.push(`/app/authUser/${id}`)
    },
    comodoGo (id) {
      this.$router.push(`/app/authComodo/${id}`)
    }
  },
  created () {
    this.$store.dispatch('user/getAll')
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
.lineWeight {
  font-weight: 300;
}
</style>
