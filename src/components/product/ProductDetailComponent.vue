<template>
<section class="shop-details">
    <div class="product__details__pic">
        <div class="container" v-if="isDataLoaded">

            <div class="row">
                <div class="col-lg-3 col-md-3" style="max-height:700px;overflow-y:scroll">
                    <ul class="nav nav-tabs" role="tablist">
                        <li class="nav-item" v-for="(item, index ) in  allImages" :key="index" @click="setImageSelected(item,index)">
                            <div class="nav-link active" data-toggle="tab" href="#tabs-1" style="cursor: pointer" >
                                <div class="product__thumb__pic set-bg" 
                                        v-bind:style="[ item.search('base64') > 0 ? { backgroundImage: 'url(' + `${item}` + ')' } : { backgroundImage: 'url(' + `data:image/jpeg;base64,${item}` + ')' } ]">
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>

                <div class="col-lg-6 col-md-9">
                    <div class="tab-content">
                        <div class="tab-pane active" id="tabs-1" role="tabpanel">
                            <div class="product__details__pic__item" >
                                <!-- <img :src="'data:image/jpeg;base64,'+product.img_default"  alt=""> -->
                                <vue-inner-zoom-component :src="imageSelected.search('base64') > 0 ? imageSelected  :'data:image/jpeg;base64,'+imageSelected"  alt=""> </vue-inner-zoom-component>
                            </div>
                        </div>
                        
                        <div class="tab-pane" id="tabs-4" role="tabpanel">
                            <div class="product__details__pic__item">
                                <!-- <img src="img/shop-details/product-big-4.png" alt=""> -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <cart-setter-component @changeColor="changeColor" v-if="product"></cart-setter-component>

    <window-info-component :product='product'  v-if="product"></window-info-component>

</section>
</template>

<script>
import { useProductsStore , useCart } from '@/store'

export default {
    props:['products'],
    data(){
        return{
            clicked: false,
            product: useProductsStore().products.filter(produc => produc.title === this.$route.params.title.replace(/-/g,' ') )[0],
            category: [],
            cuantity: 1,
            colors: ['negro', 'verde', 'rosa', 'amarillo', 'gris', 'blanco', 'morado', 'rojo', 'azul'],
            color: null,
            imgActice: null,
            cartStore: useCart(),
            sizes : ['s', 'm', 'l', 'xl', '2xl'],
            size: null,
            coincidencias: null,
            sizeCoincidencias: null,
            imageSelected: useProductsStore().products.filter(produc => produc.title === this.$route.params.title.replace(/-/g,' ') )[0]?.img_default,
            allImages: []

        }
    },
    computed: {
        isDataLoaded(){
            if(this.product)
                return true
            else
                return false
        }
    },
    beforeMount(){
        if(!this.products){
            useProductsStore().getProdcuts()
            this.$forceUpdate()
        }
        
        
        if(!this.color && this.product){            
            this.color =    Object.keys(this.product.images)[0]
        }
        // console.log(typeof this.product.images);
        if(this.product){

            for (const key in this.product.images) {
                
                if( Array.isArray(this.product.images[key] ) ){
                    
                    this.product.images[key]?.forEach(item=>{
                        this.allImages.push(item) 
                    })
                }
                
            }
        }
      
            
    },
    methods:{
        setImageSelected(item, index){
            // console.log(item);
            this.imageSelected = item
        },
        changeColor(color){
            this.color = color
            this.imageSelected = useProductsStore().products.filter(produc => produc.title === this.$route.params.title.replace(/-/g,' ') )[0].images[`${color}`][0]
        }
    }
}
</script>
