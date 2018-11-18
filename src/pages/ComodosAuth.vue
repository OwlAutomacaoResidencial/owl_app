<template>
  <q-page id="back">
    <div id="firstLabel" class="full-width text-center text-white bg-primary shadow-2 labelComodo">Ambientes</div>
    <q-carousel class="shadow-2" infinite>
      <q-carousel-slide class="bg-white row slidePadding" v-for="x in 3" :key="x">
        <div class="col-4 text-center relative-position" v-for="x in 3" :key="x" @click="comodoGo('10')" v-ripple>
          <img :src="avatar" alt="Avatar" class="avatar">
          <div class="itemLabel">Jardim</div>
        </div>
      </q-carousel-slide>
    </q-carousel>
    <div class="full-width text-center text-white bg-primary shadow-2 labelComodo marginLabel">Usuários</div>
    <q-carousel class="shadow-2" infinite>
      <q-carousel-slide class="bg-white row slidePadding" v-for="x in 3" :key="x">
        <div class="col-4 text-center relative-position" v-for="x in 3" :key="x" @click="userGo('10')" v-ripple>
          <img :src="user" alt="Avatar" class="avatar">
          <div class="itemLabel">Guilherme Beidaki</div>
          <div class="lineWeight">(Permissão)</div>
        </div>
      </q-carousel-slide>
    </q-carousel>
    {{ userList }}
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
      console.log(this.$store.getters['user/list'])
      return this.$store.getters['user/list']
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
