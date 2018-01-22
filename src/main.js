import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import CoinsList from './components/CoinsList.vue'
import Calculator from './components/Calculator.vue'
import NewList from './components/NewList.vue'

Vue.use(VueRouter);

export const EventBus = new Vue({
  data() {
    return {
      coinsData: []
    }
  },
  methods: {
    setData(data) {
      this.coinsData = data;
    },
    getData() {
      return this.coinsData;
    }
  }
});

const router = new VueRouter({
  routes: [
    { path: '/', name: 'home', component: CoinsList },
    { path: '/calc', name: 'calculator', component: Calculator },
    { path: '/list', name: 'list', component: NewList }
  ]
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
