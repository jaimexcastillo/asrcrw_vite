<template>
  <div class="container">
            <div class="row d-flex justify-content-between">
                <div class="" style="width: 33%">
                    <nav class="header__menu mobile-menu">
                        <ul>
                            <li v-bind:class="[active === '/'?  'active' : '']" @click="active ='/' "><router-link to="/">Inicio</router-link></li>
                            <li v-bind:class="[active === '/shop'?  'active' : '']" @click="active ='/shop' "><router-link to="/shop">Tienda</router-link>
                                <ul class="dropdown">
                                    <li><router-link to="/shop">Todos</router-link></li>
                                    <li><router-link to="/shop/hombres">Hombres</router-link></li>
                                    <li><router-link to="/shop/mujeres">Mujeres</router-link></li>
                                    <li><router-link to="/shop/ninos">Niños</router-link></li>
                                    <li><router-link to="/shop/accesorios">Accesorios</router-link></li>
                                </ul>
                            </li>
                            <li v-bind:class="[active === '/about'?  'active' : '']" @click="active ='/about' " ><router-link to="/galery">Galeria</router-link></li>

                        </ul>
                    </nav>
                </div>
                 <div class="" style="width: 33%">
                    <div class="header__logo mx-auto">
                        <router-link to="/"><img src="../../assets/img/logo.jpg" alt=""></router-link>
                    </div>
                </div>
                <div class="" style="width: 33%">
                    <div class="header__nav__option">
                        <a href="#" class="search-switch"><img src="../../assets/img/icon/search.png" alt=""></a>
                        <!-- <a href="#"><img src="../../assets/img/icon/heart.png" alt=""></a> -->
                        <router-link to="/cart"><img class="cart-header" src="../../assets/img/shopping-cart/cart-shopping.svg" alt=""> <span id="cart-number" class="cart-number">{{cartQuantity.getCartQuantityItems}}</span></router-link>
                        <!-- <router-link to="/cart"><img src="../../assets/img/icon/cart.png" alt=""> <span>{{cartQuantity.getCartQuantityItems}}</span></router-link> -->
                        <div class="price">${{(cartQuantity.getTotal).replace(/\d(?=(\d{3})+\.)/g, '$&,')}}</div>
                    </div>
                </div>
            </div>
            <div class="canvas__open" @click="showMenu = !showMenu"><i class="fa fa-bars"></i></div>
            <Transition name="fade">
                <div class="menu-mobil" v-if="showMenu">
                    <div class="mt-5">
                        <img  style="padding:0px 22px" src="../../assets/img/logotipo.jpg" alt="">
                    </div>
                    <div class="card" style="border: none">
                        <div class="card-heading-mobile">
                            <router-link to="/" @click="showMenu = false"><span class="mobile-header"> Inicio </span></router-link>
                        </div>
                    </div>
                    <div class="card" style="border: none">
                        <div class="card-heading">
                            <router-link to="/shop" @click="showMenu = false"><span class="mobile-header"> Tienda </span></router-link>
                        </div>
                        <div class="collapse show">
                            <div class="card-body">
                                <div class="mobile__sidebar__categories">
                                    <ul >
                                       <li><router-link to="/shop" @click="showMenu = false">Todos</router-link></li>
                                        <li><router-link to="/shop/hombres" @click="showMenu = false">Hombres</router-link></li>
                                        <li><router-link to="/shop/mujeres" @click="showMenu = false">Mujeres</router-link></li>
                                        <li><router-link to="/shop/ninos" @click="showMenu = false">Niños</router-link></li>
                                        <li><router-link to="/shop/accesorios" @click="showMenu = false">Accesorios</router-link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card" style="border: none">
                        <div class="card-heading">
                            <router-link to="/about" @click="showMenu = false"><span class="mobile-header" > Acerca de </span></router-link>
                        </div>
                    </div>
                </div>
            </Transition>
            <div class="helper-menu-mobil" v-if="showMenu" @click="showMenu = false">
            </div>
        </div>
</template>

<script>
import { useCart } from '@/store'

export default {
    data(){
        return{
            active: window.location.pathname,
            cartQuantity: useCart(),
            showMenu: false
        }
    },
    watch:{
        useCart:{
            inmediatre: true,
            handler(newVal, oldVal){
                console.log('update');
                this.cartQuantity = newVal.getCartQuantityItems
                this.$forceUpdate()
            }
        }
    }
}
</script>