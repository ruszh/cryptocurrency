<template>
    <div class='container'>        
        <div class='row'>            
            <ul class="list-group col">      
                <li v-for="(coin, index) in coinsStorage" class="list-group-item border-left-0 border-right-0">
                    <div class="row">        
                        <div class="col-1">{{index + 1}}</div> 
                        <div class="col-1">{{coin.short}}</div> 
                        <div class="col">{{coin.long}}</div> 
                        <div class="col price">{{Math.round(coin.price * 10000) / 10000 }}$</div>
                        <div class="col" :class="[ {up: coin.cap24hrChange > 0}, {down: coin.cap24hrChange < 0}]">{{coin.cap24hrChange}}%</div>                         
                        <div class="col marketcap">{{Math.round(coin.mktcap).toLocaleString('ru')}}$</div> 
                    </div>
                </li>
            </ul>  
        </div>
    </div>  
</template>

<script>
    import socketClient from 'socket.io-client'

    export default {
        data() {
            return {
                coinsStorage: [],
                numberOfCoins: 20
            }
        }, 
        methods: {
            getData() {
                fetch('http://coincap.io/front')
                    .then(res => {
                        return res.json()
                    })
                    .then(response => {                    
                        this.coinsStorage = response.slice(0, this.numberOfCoins);
                    })

            }
        },    
        created() {
                this.getData();

                const socket = socketClient.connect('https://coincap.io');

                socket.on('trades', function(tradeMsg) {                    
                    this.coinsStorage = this.coinsStorage.map(function(coin) {
                        if(coin.short === tradeMsg.coin) return tradeMsg.msg
                        return coin;
                    })                    
                }.bind(this));

                window.addEventListener('scroll', function() {
                    if(window.pageYOffset > 200) {
                        this.numberOfCoins = 50;
                        this.getData()
                    }
                    if(window.pageYOffset < 300) {
                        this.numberOfCoins = 20;
                        this.getData()
                    }
                }.bind(this))
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
    .price {
        color: rgb(185, 142, 0)
    }
    .marketcap {
        color: royalblue
    } 
</style>
