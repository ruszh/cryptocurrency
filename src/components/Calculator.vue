<template>
    <div class="container">
        <h1 class='text-center'>Cryptocurrency Calculator</h1>
        <div class="input-group d-flex justify-content-center">
            <div class='row'>
                <select @change="selectCoin()" class="custom-select" id="inputGroupSelect04">                
                    <option v-for='coin in coinsObject' :value="coin.rank">{{ coin.symbol }}</option>
                </select>
                <!-- <div class="input-group-append">
                    <button @click='count' class="btn btn-outline-secondary" type="button">Convert</button>                
                </div>   -->
                <div class="input-group col">         
                    <input v-model='number' @change='count' type="number" class="form-control col" aria-label="small" aria-describedby="inputGroup-sizing-sm">
                </div>   
            </div> 
               
        </div>  
        <!-- <div class="row">
            selected coin: {{ selectedCoin }}
        </div> -->
        <div class="row d-flex justify-content-center display-4" v-if='counted'>
            {{ number }} {{ selectedCoin.symbol }} = {{ price }}$
        </div>  
    </div>
    
</template>

<script>
import { EventBus } from '../main.js'



export default {
  data() {
      return {
          coinsObject: [],
          selectedCoin: {},
          number: '',
          price: '',
          counted: false          
      }
  },  
  mounted() {
      this.coinsObject = EventBus.getData(); 
      this.selectedCoin = this.coinsObject[0];      
  },
  methods: {
      selectCoin() {
          const selectEl = document.querySelector('#inputGroupSelect04');
          this.selectedCoin = this.coinsObject[selectEl.selectedIndex];
      },
      count() {
          const coinPrice = this.selectedCoin.price_usd;
          this.price = this.number * coinPrice;
          this.counted = true;
      }
  }
}
</script>

<style>
    
</style>
