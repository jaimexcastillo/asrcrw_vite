<template>
  <section class="shop spad">
        <div class="container">
            <div class="row">
              <filter-shop-component @filterCategories="filterCategories" :categories="categories" />
              <shop-component  :filteredCategories="categories"/>
            </div>
        </div>
  </section>
</template>

<script>
export default {
  props:['NewCategories'],
  data(){
    return{
        categories: []
    }
  },
  mounted(){
    // console.log(this.$route.hash);
  },
  methods:{
    filterCategories(val){
      this.categories = val
      console.log('xx',val);
      this.$forceUpdate();
    }
  },
  watch:{
    NewCategories:{
      immediate: true,
      handler(val, oldval){
        this.categories = val
      }
    }
  }

}
</script>