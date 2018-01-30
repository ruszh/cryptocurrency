<template>
    <div class="container">
        <h1 class='text-center'>Cryptocurrency Calculator</h1>
        <div class="input-group d-flex justify-content-center">
            <div class='row'>
                <select @change="selectCoin()" class="custom-select" id="inputGroupSelect04">                
                    <option v-for='(coin, index) in coinsObject' :value="index">{{ coin.short }}</option>
                </select>               
                <div class="input-group col">         
                    <input v-model='number' @change='count' type="number" class="form-control col" aria-label="small" aria-describedby="inputGroup-sizing-sm">
                </div>   
            </div> 
               
        </div>  
        <div class="row d-flex justify-content-center display-4" v-if='counted'>
            {{ number }} {{ selectedCoin.short }} = {{ price }}$
        </div>  
    </div>
    
</template>

<script>

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
  created() {
    fetch('http://coincap.io/front')
                    .then(res => {
                        return res.json()
                    })
                    .then(response => {                    
                        this.coinsObject = response;
                    });

    this.selectedCoin = this.coinsObject[0];   
  },
  methods: {
      selectCoin() {
          const selectEl = document.querySelector('#inputGroupSelect04');
          this.selectedCoin = this.coinsObject[selectEl.selectedIndex];
      },
      count() {
          const coinPrice = this.selectedCoin.price;
          this.price = this.number * coinPrice;
          this.counted = true;
      }
  }
}
</script>

<style>
    
</style>
