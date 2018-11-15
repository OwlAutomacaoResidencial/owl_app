<template>
  <q-page>
    <div id="logoDiv" class="bg-primary"><img id="logo" :src="logo" alt="Logo"></div>
    <div id="version" class="full-width text-center">Versão 1.0.0</div>
    <q-list no-border>
      <q-item-separator />
      <q-item>
        <q-item-main>
          <q-item-tile class="itemContent" sublabel>Quem somos?</q-item-tile>
          <q-item-tile sublabel>
            Localizada em Maringá, a Owl foi criada a partir de um trabalho acadêmico, por graduandos de Engenharia de Software, com o objetivo de oferecer uma solução de automação simples, através de um sistema modular e totalmente eficaz
          </q-item-tile>
        </q-item-main>
      </q-item>
      <q-item-separator />
      <q-item @click.native="openURL('https://owlautomacao.com.br')" v-ripple>
        <q-item-main>
          <q-item-tile class="text-secondary" label>Site</q-item-tile>
          <q-item-tile class="itemContent" sublabel>Ir para o site da empresa</q-item-tile>
        </q-item-main>
        <q-item-side right icon="keyboard arrow right" />
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { openURL } from 'quasar'
export default {
  name: 'ConfigAboutPage',
  data () {
    return {
      logo: require('../assets/logo.png')
    }
  },
  methods: {
    openURL
  }
}
</script>

<style scoped>
#logo {
  width: 75px;
  height: 45px;
  display: block;
  margin: 0 auto;
}
#logoDiv {
  width: 150px;
  height: 90px;
  display: block;
  margin: 0 auto;
  margin-top: 20px;
  padding: 20px;
  border-radius: 50px;
}
#version {
  margin-top: 10px;
  font-weight: 300;
}
.itemContent {
  color: #000;
  font-size: 18px;
  font-weight: 300;
  margin-top: 10px;
}
</style>
