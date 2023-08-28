<template>
<div>
  <div class="shadow-container" @click="shoppingCart.shoppingModal = false"> </div>
  <div class="dialog-container">
    <div class="dialog">
      <div class="card">
        <cart-setter-component></cart-setter-component>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import { useLoader } from '@/store'
export default {
  props:[],
  data(){
    return{
      shoppingCart: useLoader(),
    }
  },
  
}
</script>