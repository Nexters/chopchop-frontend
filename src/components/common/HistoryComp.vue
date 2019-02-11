<template>
<div class="history-comp">
<<<<<<< Updated upstream
  <div class="item" v-for='i in 5' :key='i'>
=======
  <div class="item" v-for='(item, i) in historyList' :key='i'>
>>>>>>> Stashed changes
    <div class="icon-wrap">
      <span>0</span>
      <div class="icon chart">
      </div>
      <div class="icon pin">
      </div>
      <div class="icon del">
      </div>
    </div>
<<<<<<< Updated upstream
    <div class="subject">subject</div>
    <div class="url">github.com/ojh102?tab=following</div>
    <div class="primary">
      <span>http://nexters.me/2S7JJfo</span>
      <button class='primary'>COPY</button>
=======
    <div class="subject">{{item.originUrl}}</div>
    <div class="url">{{item.originUrl}}</div>
    <div class="primary">
      <span>{{item.shortUrl}}</span>
      <button class='primary' @click='copy(item.shortUrl)'>COPY</button>
>>>>>>> Stashed changes
    </div>
  </div>
</div>
</template>
<<<<<<< Updated upstream
=======

<script>
export default {
  methods: {
    copy(str) {
      const el = document.createElement("textarea")
      el.value = str
      document.body.appendChild(el)
      el.select()
      document.execCommand("copy")
      document.body.removeChild(el)
      alert("복사완료!")
    }
  },
  computed: {
    historyList() {
      return this.$store.getters.historyList
    }
  }
}
</script>
>>>>>>> Stashed changes
