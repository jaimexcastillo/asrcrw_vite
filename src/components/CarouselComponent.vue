<template>
    <section class="hero" >
        <carousel :wrapAround="true" :autoplay="10000"  :wheelControl="false"  class="hero-height">
            <Slide v-for="(item , index) in carousel" :key="index">
                <img :src="getImageUrl(`${item.img_url}`)" :alt="item.product_url">
                <div class="container-carousel">
                    <button class="button-carousel">
                        <router-link :to="item.product_url" class="white">
                            Lo quiero!
                        </router-link>
                    </button>
                </div>
            </Slide>
            <!-- <slide>
                <img src="../assets/img/hero/hero-2.jpg" alt="">
                <button class="button-carousel">
                    <router-link to="/product/camisa-de-austero-crew-manga-larga" class="white">
                        Lo quiero!
                    </router-link>
                </button>
            </slide>
            <slide>
                <img src="../assets/img/hero/hero-3.jpg" alt="">
                <button class="button-carousel">
                    <router-link to="/product/camisa-de-austero-crew-manga-larga" class="white">
                        Lo quiero!
                    </router-link>
                </button>
            </slide>
            <slide>
                <img src="../assets/img/hero/hero-4.jpg" alt="">
                <button class="button-carousel">
                    <router-link to="/product/camisa-de-austero-crew-manga-larga" class="white">
                        Lo quiero!
                    </router-link>
                </button>
            </slide>
            <slide>
                <img src="../assets/img/hero/hero-5.jpg" alt="">
                <button class="button-carousel">
                    <router-link to="/product/camisa-de-austero-crew-manga-larga" class="white">
                        Lo quiero!
                    </router-link>
                </button>
            </slide> -->
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

export default {
    data(){
        return{
            settings:{

            },
            carousel:[
                {
                    img_url:'hero-1.jpg',
                    product_url: '/product/camisa-de-austero-crew'
                },
                {
                    img_url:'hero-2.jpg',
                    product_url: '/product/camisa-de-austero-crew-society'
                },
                {
                    img_url:'hero-3.jpg',
                    product_url: '/product/camisa-de-austero-crew-tradi-rosa-y-gallo'
                },
                {
                    img_url:'hero-4.jpg',
                    product_url: '/product/camisa-de-austero-crew-kanji'
                },
                {
                    img_url:'hero-5.jpg',
                    product_url: '/product/camisa-de-austero-crew-kanji-mujer-espalda'
                }
            ]
        }
    },
    components: {
        Carousel,
        Slide,
        Pagination,
        Navigation,
    },
    methods:{
        getImageUrl(name){
            return new URL(`../assets/img/hero/${name}`, import.meta.url).href   
        }
    }
}
</script>