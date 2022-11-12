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

    <div class="input-container">
      <f7-input
        v-model:value="state.selectedNumber"
        :input-style="{height: '50px', margin: '10px'}"
        outline
        label="Number"
        type="number"
        placeholder="Nummer von 0 - 99"
        clear-button
        min="0"
        max="99"
        @change="onSelectedNumberChanged($event.target.value)"
      />
    </div>
    <f7-swiper
      navigation
      :active-index="state.selectedNumber"
    >
      <f7-swiper-slide
        v-for="word_mapping in catalog"
        :key="word_mapping.number"
      >
        <number-to-word-card :word-mapping="word_mapping" />
      </f7-swiper-slide>
    </f7-swiper>
  </f7-page>

  <attributions-page />
</template>

<script setup>
import { useStore, f7 } from 'framework7-vue'
import { reactive } from 'vue'

import AttributionsPage from './AttributionsPage.vue'
import NumberToWordCard from '../components/NumberToWordCard.vue'

const catalog = useStore('getWordCatalog')
const state = reactive({ selectedNumber: 0 })

function onSelectedNumberChanged () {
  let activeIndex = 0
  if (state.selectedNumber.length === 2 && state.selectedNumber < 10) {
    activeIndex = parseInt(state.selectedNumber[1]) + 10
  } else if (state.selectedNumber < 10) {
    activeIndex = state.selectedNumber
  } else if (state.selectedNumber >= 10) {
    activeIndex = parseInt(state.selectedNumber) + 10
  }

  const swiper = f7.swiper.get('.swiper')
  swiper.activeIndex = activeIndex
  swiper.update()
}
</script>

<style lang="scss" scoped>
  .swiper-slide {
    text-align: center;
    box-sizing: border-box;
    padding: 10px;
  }
  .input-container {
    margin: 10px;
  }
</style>
