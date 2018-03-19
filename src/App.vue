<template>
  <div id="app" class="container">
    <div class="row">        
        <nav class="nav m-auto nav-pills">
          <router-link class='nav-link link' :to='{ name: "home" } ' exact>Home</router-link> 
          <router-link class='nav-link link' :to='{ name: "calculator" }'>Calculator</router-link>          
        </nav>
    </div>  
    <router-view></router-view>
    <button v-if='visibleUp' class='scroll-button' @click='scrollUp'><img src="https://upload.wikimedia.org/wikipedia/commons/6/61/Black_Up_Arrow.png" height="20px"></button>
    <button v-if='visibleDown' class='scroll-button button-down' @click='scrollDown'><img src="https://upload.wikimedia.org/wikipedia/commons/6/61/Black_Up_Arrow.png" height="20px"></button>
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
      visibleUp: false,
      visibleDown: false,
      scrollY: 0
    }
  },
  methods: {
    scrollUp() {
      this.scrollY = window.pageYOffset;
      window.scrollTo(0, 0);
      this.visibleUp = false;
      this.visibleDown = true;
    },
    scrollDown() {
      window.scrollTo(0, this.scrollY);
      this.visibleDown = false;
      this.visibleUp = true;
      
    }
  },
  created() {
    window.addEventListener('scroll', ()=> {      
      if(window.pageYOffset > 1000) {
        if(this.visibleDown) this.visibleDown = false;
         this.visibleUp = true;
      }      
      else this.visibleUp = false;
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
.scroll-button {
    position: fixed;
    top: 50%;
    left: 10px;
    border: none;
    background: transparent;
    outline: 0 !important;
    cursor: pointer;
}
.button-down { 
  transform: rotate(180deg);
}
</style>
