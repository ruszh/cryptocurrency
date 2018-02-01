<template>
  <div id="app" class="container">
    <div class="row">        
        <nav class="nav m-auto nav-pills">
          <router-link class='nav-link link' :to='{ name: "home" } ' exact>Home</router-link> 
          <router-link class='nav-link link' :to='{ name: "calculator" }'>Calculator</router-link>          
        </nav>
    </div>  
    <router-view></router-view>
    <button v-if='visible' class='button-up' @click='scrollUp'><img src="https://upload.wikimedia.org/wikipedia/commons/6/61/Black_Up_Arrow.png" height="20px"></button>
  </div>
</template>

<script>
import Coin from './components/Coin.vue'
import CoinsList from './components/CoinsList.vue'

export default {  
  components: {
    'app-coin': Coin,
    'app-coins-list': CoinsList    
  },
  data() {
    return {
      visible: false
    }
  },
  methods: {
    scrollUp() {
      window.scrollTo(0, 0);
    }
  },
  created() {
    window.addEventListener('scroll', ()=> {
      if(window.window.pageYOffset > 1000) this.visible = true;
      else this.visible = false;
    })
  }

}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;  
  color: #2c3e50;
}
.active-link {
  background-color: #f2f2f2;
  color:  #014185
}
.button-up {
  position: fixed;
  top: 50%;
  left: 10%;
  border: none;
  background: transparent;
  outline: 0 !important;
  cursor: pointer;
}
</style>
