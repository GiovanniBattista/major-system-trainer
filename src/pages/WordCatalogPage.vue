<template>
  <f7-page name="word-catalog">
    <f7-navbar title="Wortkatalog">
      <f7-nav-right>
        <f7-link
          icon-f7="info_circle"
          popup-open=".app-info"
        />
      </f7-nav-right>
    </f7-navbar>

    <f7-swiper navigation>
      <f7-swiper-slide
        v-for="word_mapping in catalog"
        :key="word_mapping.number"
      >
        <div class="number">
          {{ word_mapping.number }}
        </div>
        <div class="word">
          {{ word_mapping.word }}
        </div>
        <div class="mnemonic" />
        <img
          class="image"
          :src="word_mapping.image"
        >
      </f7-swiper-slide>
    </f7-swiper>
  </f7-page>

  <attributions-page />
</template>

<script>
import store from '../js/store'

import { useStore } from 'framework7-vue'

import { onMounted } from 'vue'
import AttributionsPage from './AttributionsPage.vue'

export default {
  name: 'WordCatalog',

  components: { AttributionsPage },

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
  .swiper {
    height: 80%;
  }
  .swiper-slide {
    text-align: center;
    box-sizing: border-box;
    height: 100%;
  }
  .number {
    font-weight: 500;
    font-size: 30px;
    line-height: 100px;
  }
  .word {
    font-size: 20px;
    line-height: 100px;
  }
  .mnemonic {

  }
  .image {
    max-width: 512px;
    margin: 0 auto;
  }
</style>
