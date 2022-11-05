<template>
  <f7-page name="word-catalog">
    <f7-navbar title="Wortkatalog" />

    <f7-swiper navigation>
      <f7-swiper-slide
        v-for="word_mapping in catalog"
        :key="word_mapping.number"
      >
        <div>{{ word_mapping.number }}</div>
        <div>{{ word_mapping.word }}</div>
        <div>{{ word_mapping.image }}</div>
      </f7-swiper-slide>
    </f7-swiper>
  </f7-page>
</template>

<script>
import store from '../js/store'

import { useStore } from 'framework7-vue'

import { onMounted } from 'vue'

export default {
  name: 'WordCatalog',

  setup () {
    const catalog = useStore('getWordCatalog')

    onMounted(() => {
      store.dispatch('getWordCatalog')
    })

    return {
      catalog
    }
  }
}
</script>

<style lang="scss" scoped>
.swiper-slide {
    background: #fff;
    text-align: center;
    font-size: 18px;
    line-height: 200px;
    box-sizing: border-box;
    border: 1px solid #ccc;
  }
</style>
