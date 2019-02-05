<template>
<div class="history-comp">
  <div class="item" v-for='i in 5' :key='i'>
    <div class="icon-wrap">
      <span>0</span>
      <div class="icon chart">
      </div>
      <div class="icon pin">
      </div>
      <div class="icon del">
      </div>
    </div>
    <div class="subject">subject</div>
    <div class="url">github.com/ojh102?tab=following</div>
    <div class="primary">
      <span>http://nexters.me/2S7JJfo</span>
      <button class='primary'>COPY</button>
    </div>
  </div>
</div>
</template>
