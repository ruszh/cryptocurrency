<template>
                <table class="table table-striped pt-2">
                    <thead>
                        <tr>
                            <th scope="col">Rank</th>
                            <th scope="col">Symbol</th>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Change(24h)</th>
                            <th scope="col">Market Cap</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(coin, index) in coinsStorage">
                            <th scope="row">{{ index + 1 }}</th>
                            <td>{{ coin.short }}</td>
                            <td>{{ coin.long }}</td>
                            <td class='price'>{{ Math.round(coin.price * 10000) / 10000 }}$</td>
                            <td :class="[ {up: coin.cap24hrChange > 0}, {down: coin.cap24hrChange < 0}]">{{ coin.cap24hrChange }}%</td> 
                            <td class="marketcap">{{Math.round(coin.mktcap).toLocaleString('ru')}}$</td>
                        </tr>                        
                    </tbody>
        </table>        
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
    .marketcap {
        color: royalblue
    } 
    .price {
        width: 150px;

    }
</style>
