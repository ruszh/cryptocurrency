<template>
  <div class="container">      
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
import Coin from './Coin.vue'
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
    fetch('https://api.coinmarketcap.com/v1/ticker/?limit=20')
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

</style>
