<template>
  <div class="container">
    <div class="row">
      <select @change="selectNumberOfCoins()" class="custom-select col-1" id="select1">                
          <option  value="10">10</option>
          <option  value="20">20</option>
          <option  value="50">50</option>
          <option  value="100">100</option>
      </select>
    </div>      
    <div class="row">        
        <div class="col-1">Rank</div>         
        <div class="col-4">Name</div> 
        <div class="col-3">Price USD</div> 
        <div class="col-3">Market capitalization</div> 
    </div>
    <ul class="list-group">      
      <li v-for="item in currentData" class="list-group-item border-left-0 border-right-0">
        <app-coin :coin='item'></app-coin>
      </li>
    </ul>    
  </div>
</template>

<script>
import Coin from './Coin.vue'
import { EventBus } from '../main.js'

export default {
  name: 'app',
  data () {
    return {
      currentData: [],
      numberOfCoins: 10
    }
  },
  components: {
    'app-coin': Coin
  },
  created() {
      this.getData()
  },
  methods: {
    selectNumberOfCoins() {
        const selectEl = document.querySelector('select'),
              selectedIndex = selectEl.selectedIndex;

        this.numberOfCoins = selectEl[selectedIndex].value;
        this.getData()
    },
    getData() {
      fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=${this.numberOfCoins}`)
        .then(res => {
          return res.json()
        })
        .then(res => {
          this.currentData = res;          
          EventBus.setData(this.currentData);
        });  
    }
  }
}
</script>

<style>

</style>
