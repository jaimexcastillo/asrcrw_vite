<template>
    <section class="hero" >
        <carousel :wrapAround="true" :autoplay="0"  :wheelControl="false"  class="hero-height">
            <Slide v-for="(item , index) in carousel" :key="index">
                <router-link v-if="item.product_url" :to="`product/${item.product_url}`" class="white">
                <img :src="item.img" :alt="item.product_url">
                <div class="container-carousel">
                    <button class="button-carousel">
                            Lo quiero!
                        </button>
                    </div>
                </router-link>
                <div v-else>
                    <img :src="item.img" :alt="item.product_url">
                </div>
            </Slide>
            
            <template  #addons>
                <Navigation ></Navigation>
                <Pagination></Pagination>
            </template>
            </carousel>
    </section>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { useCarousel } from '@/store/index'
export default {
    data(){
        return{
            settings:{

            },
            carousel:[]
        }
    },
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    async created(){
        await useCarousel().getCarousel()
        this.carousel = useCarousel().carouselItems
    },
    methods:{
     
    }
}
</script>