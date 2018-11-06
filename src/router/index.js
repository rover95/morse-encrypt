import Vue from 'vue'
import Router from 'vue-router'
import MorseEncrypt from '@/components/MorseEncrypt'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MorseEncrypt',
      component: MorseEncrypt
    }
  ]
});
