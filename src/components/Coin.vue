<template>
    <div class="row">        
        <div class="col-1">{{coin.rank}}</div> 
        <div class="col-1">{{coin.symbol}}</div> 
        <div class="col-3">{{coin.name}}</div> 
        <div class="col-3">{{coin.price_usd}}$</div> 
        <div class="col-3">{{Math.round(coin.market_cap_usd)}}$</div> 
    </div>
</template>

<script>
export default {
  props: ["coin"]
}
</script>

<style>
    
</style>
