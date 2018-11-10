import Vue from 'vue'
import Router from 'vue-router'
import MorseEncrypt from '@/components/MorseEncrypt'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "MorseEncrypt",
      component: MorseEncrypt
    }
  ]
});
