<template>
  <q-btn flat dense>
    <b class="text-grey-8"><flag :iso="selectedLang.id" /><br>{{ selectedLang.name }}</b>
    <q-popover anchor="bottom right" self="top right">
      <q-list link>
        <q-item v-close-overlay v-for="lang in languageList" :key="lang.id" @click.native="changeLang(lang)">
          <q-item-side><flag :iso="lang.id" /></q-item-side>
          <q-item-main>{{ lang.name }}</q-item-main>
        </q-item>
      </q-list>
    </q-popover>
  </q-btn>
</template>

<script>
export default {
  name: 'BtnLang',
  data () {
    return {
      selectedLang: { id: 'br', name: 'BR' },
      languageList: [
        { id: 'br', name: 'Brasil', locale: 'br' },
        { id: 'us', name: 'USA', locale: 'us' }
      ]
    }
  },
  methods: {
    changeLang (lang) {
      this.selectedLang.id = this.selectedLang.name = lang.id
      this.$i18n.locale = lang.locale
    }
  }
}
</script>
