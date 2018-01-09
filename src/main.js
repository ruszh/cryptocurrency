import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import CoinsList from './components/CoinsList.vue'
import Calculator from './components/Calculator.vue'

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    { path: '/', name: 'home', component: CoinsList },
    { path: '/calc', name: 'calculator', component: Calculator }
  ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
