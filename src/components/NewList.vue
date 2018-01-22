<template>
    <div class='container'>
        <div class='row'>
            <button class='btn col-2' @click='connect'>Connect</button>
        </div>
        <div class='row'>            
            <ul class="list-group col">      
                <li v-for="(coin, index) in coinsStorage" class="list-group-item border-left-0 border-right-0">
                    <div class="row">        
                        <div class="col-1">{{index + 1}}</div> 
                        <div class="col-1">{{coin.short}}</div> 
                        <div class="col-3">{{coin.long}}</div> 
                        <div class="col-3">{{coin.price}}$</div> 
                        <div class="col-3">{{Math.round(coin.mktcap)}}$</div> 
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
                coinsStorage: []
            }
        },
        methods: {
            connect() {
                const socket = socketClient.connect('https://coincap.io');

                socket.on('trades', function(tradeMsg) {
                    console.log(tradeMsg)  
                    console.log(self)
                    this.coinsStorage.map(function(coin) {
                        if(coin.short === tradeMsg.coin) return tradeMsg.message.msg
                        return coin;
                    })
                }.bind(this))
            }
        },
        created() {
            fetch('http://coincap.io/front')
                .then(res => {
                    return res.json()
                })
                .then(response => {
                    this.coinsStorage = response;
                })
        }
    }
</script>

<style>

</style>
