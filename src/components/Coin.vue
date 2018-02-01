<template>
    <tr>
        <th scope="row">{{ index + 1 }}</th>                            
        <td>{{ coin.short }} - {{ coin.long }}</td>
        <td class='price'>{{ Math.round(coin.price * 10000) / 10000 }}$</td>
        <td :class="[ {up: coin.cap24hrChange > 0}, {down: coin.cap24hrChange < 0}]">{{ coin.cap24hrChange }}%</td>
        <td>{{ coin.supply.toLocaleString('ru') }} {{ coin.short }}</td> 
        <td class="marketcap">{{Math.round(coin.mktcap).toLocaleString('ru')}}$</td>
        <td @change="select"><input class="form-check-input position-static" type="checkbox" value="option1"></td>
    </tr> 
</template>

<script>
export default {    
  props: ["coin", "index"],
  methods: {
      select() {
          if(document.querySelector('input[type="checkbox"]').checked === true) {
            this.$emit('selected', { coin: this.coin, index: this.index + 1 })
          } else return false;
        //   console.dir(document.querySelector('input[type="checkbox"]'))
      }
  }
}
</script>

<style>
    .up {
        color: rgb(96, 161, 30)
    }
    .down {
        color: red
    }    
    .marketcap {
        color: royalblue
    } 
    .price {
        width: 150px;

    }
</style>
