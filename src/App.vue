<template>
  <div id="app" class="container">
    <div class="row">        
        <nav class="nav m-auto nav-pills">
          <router-link class='nav-link link' :to='{ name: "home" } ' exact>Home</router-link> 
          <router-link class='nav-link link' :to='{ name: "calculator" }'>Calculator</router-link>
          <router-link class='nav-link link' :to='{ name: "list" }'>New list of coins</router-link>
        </nav>
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
}
.active-link {
  background-color: #f2f2f2;
  color:  #014185
}

</style>
