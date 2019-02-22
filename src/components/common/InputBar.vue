<template>
  <div class="input-bar">
    <h2>Execute</h2>
    <h1>URL 주소를 입력하세요.</h1>
    <div class="input-wrap">
      <input type="text" v-model="value" placeholder="URL 주소의 길이를 줄여보세요">
      <button
        :class="['secondary', isLoading ? 'loading' : '']"
        @click="chop"
        :disabled="isLoading || value.length === 0"
      >
        <pulse-loader :loading="isLoading" :color="'#FFFFFF'" :size="'0.3rem'"/>
      </button>
    </div>
  </div>
</template>

<script>
import PulseLoader from "vue-spinner/src/PulseLoader.vue"

export default {
  data() {
    return {
      value: ""
    }
  },
  methods: {
    chop() {
      const url = "/api/v1/shorten"
      const dto = {
        originUrl: encodeURI(this.value)
      }
      this.$store.dispatch("POST", { url, dto })
    }
  },
  computed: {
    isLoading() {
      return this.$store.getters.isShortenrLoading
    }
  },
  components: {
    PulseLoader
  }
}
</script>
