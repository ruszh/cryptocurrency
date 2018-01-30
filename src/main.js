import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import Calculator from './components/Calculator.vue'
import CoinsList from './components/CoinsList.vue'

Vue.use(VueRouter);

// export const EventBus = new Vue({
//   data() {
//     return {
//       coinsData: []
//     }
//   },
//   methods: {
//     setData(data) {
//       this.coinsData = data;
//     },
//     getData() {
//       return this.coinsData;
//     }
//   }
// });

const router = new VueRouter({
  routes: [
    { path: '/', name: 'home', component: CoinsList },
    { path: '/calc', name: 'calculator', component: Calculator }
  ],
  linkActiveClass: 'active-link'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
