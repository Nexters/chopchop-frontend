<template>
  <div class="header">
    <p class="main-title">{{`http://nexters.me/${this.$route.params.url}`}}</p>
    <p class="sub-title">{{originUrl}}</p>
  </div>
</template>

<script>
export default {
  computed: {
    originUrl() {
      const { url } = this.$route.params;
      let originUrl;
      this.$store.getters.historyList.map(el => {
        const urlId = el.shortUrl.split("/").pop();
        if (urlId === url) originUrl = el.originUrl;
      });
      return originUrl;
    }
  }
};
</script>
