<template>
                <table class="table table-striped pt-2">
                    <thead>
                        <tr>
                            <th scope="col">Rank</th>                            
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Change(24h)</th>
                            <th scope='col'>Available Supply</th>
                            <th scope="col">Market Cap</th>
                        </tr>
                    </thead>
                    <tbody>                        
                        <app-coin  v-for="(coin, index) in coinsStorage" :coin='coin' :index='index'></app-coin>                        
                    </tbody>
        </table>        
</template>

<script>
    import socketClient from 'socket.io-client'
    import Coin from './Coin.vue'

    export default {
        data() {
            return {
                coinsStorage: [],
                numberOfCoins: 20
            }
        }, 
        components: {
            'app-coin': Coin
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
                
                if(document.documentElement.clientHeight > 900) {
                    this.numberOfCoins = 50;
                    this.getData();
                } else this.getData();

                const socket = socketClient.connect('https://coincap.io');

                socket.on('trades', function(tradeMsg) {                    
                    this.coinsStorage = this.coinsStorage.map(function(coin) {
                        if(coin.short === tradeMsg.coin) return tradeMsg.msg
                        return coin;
                    })                    
                }.bind(this));

                window.addEventListener('scroll', function() {
                    if(window.pageYOffset > 1500) {
                        this.numberOfCoins = 100;
                        this.getData()
                    }
                    if(window.pageYOffset > 3500) {
                        this.numberOfCoins = 200;
                        this.getData()
                    }
                    console.log(window.pageYOffset)
                    
                }.bind(this))
        }
    }
</script>

<style>
    
</style>
