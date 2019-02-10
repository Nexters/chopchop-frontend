import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/components/Main'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: {
        render (c) { return c('router-view') } // 전체가 router-view 인 컴포넌트
      },
      children: [
        {
          path: '',
          component: Main
        }
      ]
    }
  ]
})
