<template>
  <div class="galery">
    <div class="grid-area">
      <div class="row">

        <img 
        v-for="(image, index ) in images" 
        :key="index"
        :src="image.img" 
         :class="`col-${image.size}`"
        >
      </div>
    </div>
  </div>
</template>
<script>
import { useGalery } from '@/store/index';
export default {
  data(){
    return {
      images: []
    }
  },
  async created(){
    await useGalery().getGalery()
    this.images = useGalery().galeryItems
  }
}

</script>