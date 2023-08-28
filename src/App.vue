<template>
  <div id="app" style="position: relative">
    <off-header-component /> 
    <header-component />
    
    <router-view />
    <vue-loader-component v-if="loader.loader" />
    <shopping-modal-component v-if="loader.shoppingModal" />

    <footer-component />
  </div>
</template>

<script>
import {useLoader} from './store'
import { useProductsStore } from  './store'

export default {
  data(){
    return{
      loader: useLoader()
    }
  },
  beforeMount(){
    useProductsStore().getProdcuts()
        this.loader.setLoader(true)
  },
  mounted(){
    let self = this
    setTimeout(function() {
            self.loader.setLoader(false);
            self.loader.setProducts()
      }, 2000);

    console.log(process.env.NODE_ENV);

  }
}
</script>

<style lang="scss">
@import url(./assets/scss/style.scss);
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
