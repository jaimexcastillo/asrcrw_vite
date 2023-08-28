<template>
    <section class="shopping-cart spad" style="min-height: 80vh">
            <div class="container">
                <div class="row" v-if="cart?.length > 0 && !checkout">
                    <div class="col-lg-8 col-12">
                        <list-item-component />
                    </div>
                    <div class="col-12 col-lg-4">
                        <total-buy-component  @numeroOrden="getNumberOrder(id)" @step2="checkout = true"/>
                    </div>
                 
                </div>
                <Transition>
                    <div v-show="checkout" style="position:relative">
                        <div @click="checkout = false"  class="regresar-carrito">
                            regresar
                        </div>
                        <div class="row justify-content-center my-4" >
                            <div class="col-12 col-lg-6">
                                <h4 class="my-4">LOS DATOS DE ENVIO SON INGRESADOS A CONTINUACION</h4>

                                <h6 class="my-2">selecciona un medio de pago:</h6>
                                <div id="paypal-button-container"></div>
                            </div> 
                        </div>
                    </div>
                </Transition>
                <div class="row" v-if="cart?.length == 0 && !orderNumber"> 
                    <div>
                        no hay nada por aqui
                        <router-link to="/shop"> regresar a comprar</router-link>
                    </div>
                </div>
                <div class="row" v-if="orderNumber">
                    gracias por tu compra tu numero de orden es {{orderNumber}}
                </div>
            </div>
    </section>
</template>

<script>
import { useCart} from '@/store'

export default {
    data(){
        return {
            cart: useCart().cart,
            orderNumber: null,
            checkout: null
        }
    },
    methods:{
        getNumberOrder(id){
            console.log('numero de orden', id);
            this.orderNumber = id
            this.cart = useCart().cart
            this.$forceUpdate()
        }
    }
}
</script>
