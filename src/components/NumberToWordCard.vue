<template>
  <div class="number">
    {{ wordMapping.number }}
  </div>
  <div class="container">
    <div class="word">
      {{ wordMapping.word }}
    </div>
    <div class="mnemonic">
      {{ wordMapping.mnemonic }}
    </div>
  </div>
  <img
    class="image"
    :src="wordMapping.image"
  >
</template>

<script>
export default {
  name: 'NumberToWordCard',

  props: {
    wordMapping: {
      type: Object,
      required: true,
      default: undefined
    }
  },

  data () {
    return {}
  },

  methods: {}
}
</script>

<style lang="scss" scoped>
  .number {
    font-weight: 500;
    font-size: 30px;
    line-height: 100px;
  }
  .container {
    height: 100px;
  }
  .word {
    font-size: 23px;
  }
  .mnemonic {
    margin-top: 5px;
  }
  .image {
    width: 100%;
    max-width: 512px;
    margin: 0 auto;
  }
</style>
