<template>
  <div class="history-comp">
    <div class="item" v-for="(item, i) in historyList" :key="i">
      <div class="icon-wrap">
        <span>0</span>
        <div class="icon chart" @click="goChart(item)"></div>
        <div class="icon pin"></div>
        <div class="icon del"></div>
      </div>
      <div class="subject">{{item.title}}</div>
      <div class="url">{{item.originUrl}}</div>
      <div class="primary">
        <span>{{item.shortUrl}}</span>
        <button class="primary" @click="copy(item.shortUrl)">COPY</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goChart(item) {
      this.$router.push(`/statistics/${item.shortUrl.split("/")[1]}`);
    },
    copy(str) {
      const el = document.createElement("textarea");
      el.value = str;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      alert("복사완료!");
    }
  },
  computed: {
    historyList() {
      return this.$store.getters.historyList;
    }
  }
};
</script>
