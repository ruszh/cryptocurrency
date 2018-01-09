<template>
  <div id="app" class="container">
    <div class="row">        
        <div class="col-1">Rank</div>         
        <div class="col-4">Name</div> 
        <div class="col-3">Price USD</div> 
        <div class="col-3">Market capitalization</div> 
    </div>
    <ul v-for="item in currentData" class="list-group">      
      <li class="list-group-item">
        <app-coin :coin='item'></app-coin>
      </li>
    </ul>
  </div>
</template>

<script>
import Coin from './components/Coin.vue'
export default {
  name: 'app',
  data () {
    return {
      currentData: {}
    }
  },
  components: {
    'app-coin': Coin
  },
  mounted() {
    fetch('https://api.coinmarketcap.com/v1/ticker/?limit=10')
        .then(res => {
          return res.json()
        })
        .then(res => {
          this.currentData = res;          
        });

        
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
