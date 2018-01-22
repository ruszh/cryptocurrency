<template>
  <div id="app" class="container">
    <div class="row">
        <div class="col text-center">
            <button type="button" class="btn btn-light">
              <router-link :to='{ name: "home" }'>Home</router-link>
            </button>
            <button type="button" class="btn btn-light">
              <router-link :to='{ name: "calculator" }'>Calculator</router-link>
            </button>
            <button type="button" class="btn btn-light">
              <router-link :to='{ name: "list" }'>New list of coins</router-link>
            </button>
        </div>
    </div>  
    <router-view></router-view>
  </div>
</template>

<script>
import Coin from './components/Coin.vue'
import CoinsList from './components/CoinsList.vue'
import NewList from './components/NewList.vue'

export default {  
  components: {
    'app-coin': Coin,
    'app-coins-list': CoinsList,
    'app-new-list': NewList
  }  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;  
  color: #2c3e50;
  margin-top: 60px;
}

</style>
