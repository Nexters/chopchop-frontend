<template>
  <div class="history-comp">
    <div class="item" v-for="(item, i) in historyList" :key="i">
      <div class="icon-wrap">
        <span>0</span>
        <div class="icon chart" @click="goChart(item)"></div>
        <!-- <div class="icon pin"></div> 핀 기능 삭제에 따른 주석처리 -->
        <div class="icon del" @click="deleteHistory(item.shortUrl)"></div>
      </div>
      <div class="subject">{{item.originUrl.split('/').splice(0, 3).join('/')}}</div>
      <div class="url">{{decodeURI(item.originUrl)}}</div>
      <div class="primary">
        <span>{{item.shortUrl}}</span>
        <button class="primary" @click="copy(item.shortUrl)">COPY</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$store.getters.historyList.map(({ shortUrl }, index) => {
      this.$store.dispatch("UPDATE_URL_COUNT", { index, shortUrl: shortUrl.split("/").pop() })
    })
  },
  methods: {
    goChart(item) {
      this.$router.push(`/statistics/${item.shortUrl.split("/")[1]}`);
    },
    copy(str) {
      const el = document.createElement("textarea")
      el.value = str
      document.body.appendChild(el)
      el.select()
      document.execCommand("copy")
      document.body.removeChild(el)
      alert("복사완료!")
    },
    deleteHistory(url) {
      this.$store.dispatch("DELETE_HISTORY", url)
    }
  },
  computed: {
    historyList() {
      return this.$store.getters.historyList
    }
  }
}
</script>
