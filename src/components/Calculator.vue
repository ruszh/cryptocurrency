<template>
    <div class="container">
        <h1>Crypto-calculator</h1>
        <div class="input-group">
            <div class='row'>
                <select class="custom-select" id="inputGroupSelect04">                
                    <option v-for='coin in coinsObject' :value="coin.rank">{{ coin.symbol }}</option>
                </select>
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button">Convert</button>                
                </div>  
                <div class="input-group col">         
                    <input type="text" class="form-control col" aria-label="small" aria-describedby="inputGroup-sizing-sm">
                </div>   
            </div>      
        </div>  
        
    </div>
    
</template>

<script>
import { EventBus } from '../main.js'
export default {
  data() {
      return {
          coinsObject: []
      }
  },  
  mounted() {
      this.coinsObject = EventBus.getData();       
  }
}
</script>

<style>
    
</style>
