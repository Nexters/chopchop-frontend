<template>
  <div class="input-bar">
    <h2>Execute</h2>
    <h1>URL 주소를 입력하세요.</h1>
    <div class="input-wrap">
      <input type="text" v-model="value" placeholder="URL 주소를 입력하고 길이를 줄여보세요">
      <button class="secondary" @click="chop"/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "http://naver.com"
    };
  },
  methods: {
    chop() {
      const url = "/api/v1/shorten";
      const dto = {
        originUrl: encodeURI(this.value)
      };
      console.log(url, dto);
      this.$store.dispatch("POST", { url, dto });
    }
  }
};
</script>

<style>
</style>
