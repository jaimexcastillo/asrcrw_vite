<template>
    <div class="product__details__content">
        <div class="container">
            <div class="row d-flex justify-content-center">
                <div class="col-lg-12">
                    <div class="product__details__text">
                        <h4 class="my-4 w-100">{{product.title}}</h4>
                        <!-- <div class="rating">
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star"></i>
                            <i class="fa fa-star-o"></i>
                            <span> - 5 Reviews</span>
                        </div> -->
                        <!-- {{product.sale.percent}} -->
                        <h3 v-if="product.sale.sale"> ${{(product.price - (product.price * product.sale.percent/100) ).toFixed(2)}} <span>{{product.price}}</span></h3>
                        <h3 v-if="!product.sale.sale"> ${{product.price}} </h3>
                        <!-- <p>{{product?.desc}}</p> -->
                        <div class="product__details__option">
                            <div class="product__details__option__size in-modal-size">
                                <span>Talla:</span>
                                <button for="sm" id="size-s" @click="setSize('s')" v-bind:class="[ category.find(ele => ele == 's' )  ? 'category-selected-box' : '']" class="select-category">s
                                    <!-- <input type="radio" id="sm"> -->
                                </button>
                                <button for="md" id="size-m" @click="setSize('m')" v-bind:class="[ category.find(ele => ele == 'm' )  ? 'category-selected-box' : '']" class="select-category">m
                                    <!-- <input type="radio" id="md"> -->
                                </button>
                                <button for="l" id="size-l" @click="setSize('l')" v-bind:class="[ category.find(ele => ele == 'l' )  ? 'category-selected-box' : '']" class="select-category">l
                                    <!-- <input type="radio" id="xl"> -->
                                </button>
                                <button for="xl" id="size-xl" @click="setSize('xl')" v-bind:class="[ category.find(ele => ele == 'xl' )  ? 'category-selected-box' : '']" class="select-category">xl
                                    <!-- <input type="radio" id="2xl"> -->
                                </button>
                                <button for="2xl" id="size-xxl" @click="setSize('2xl')" v-bind:class="[ category.find(ele => ele == 'xxl' )  ? 'category-selected-box' : '']" class="select-category">2xl
                                    <!-- <input type="radio" id="2xl"> -->
                                </button>
                            </div>
                            <Transition>
                                <div v-if="size" class="product__details__option__color">
                                    <span>Color:</span>

                                    <button v-for="item in sizeCoincidencias.filter((v,i,a)=>a.findIndex(v2=>(v2.color===v.color))===i)"  :ref="item.color" :key="item.color"  v-bind:class="[item.color, item.color == color ? 'active': 0]"  @click="color = item.color, $emit('changeColor', item.color)"  for="sp-1" >
                                    </button>
                                    <button v-for="(item, index) in difColors"  :key="index"  style="cursor: not-allowed;opacity:.5"  v-bind:class="[item]" :disabled="true" >
                                    </button> 
                                </div>
                            </Transition>
                        </div>
                        <div class="product__details__cart__option">
                             <Transition>
                                <div class="quantity" v-if="coincidencias && color && size">
                                    <div class="pro-qty">
                                        <!-- <input type="number" value="1" v-model="cuantity" @change="setMin()"> -->
                                        <select name="cantidad"  v-model="cuantity" id="cantidad-items" >
                                            <option  :value="index+1" v-for="(item, index) in coincidencias" :key="index">{{index+1}} </option>
                                        </select>
                                    </div>
                                </div>
                             </Transition>
                             <Transition> <button class="primary-btn" @click="addToCart(), clicked = true" v-if="!clicked" :disabled="!size || !color || !coincidencias" :style="[ !size || !color ? {'cursor': 'not-allowed'}: 'background-color:green' ]" >añadir al carrito</button> </Transition>
                        </div>
                        <div class="product__details__btns__option">
                            <Transition>
                                <button  v-if="clicked" class="primary-btn mt-3"> <router-link @click="loader.shoppingModal = false" style="color: white" to="/cart"> Proceder al pago </router-link></button>
                            </Transition>
                            <!-- <a href="#"><i class="fa fa-heart" ></i> add to wishlist</a> -->
                            <!-- <a href="#"><i class="fa fa-exchange"></i> Add To Compare</a> -->
                        </div>
                        <!-- <div class="product__details__last__option">
                            <h5><span>Guaranteed Safe Checkout</span></h5>
                            <img src="@/assets/img/shop-details/details-payment.png" alt="">
                            <ul>
                                <li><span>SKU:</span> 3812912</li>
                                <li><span>Categories:</span> Clothes</li>
                                <li><span>Tag:</span> Clothes, Skin, Body</li>
                            </ul>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useProductsStore , useCart, useLoader } from '@/store'

export default {
    data(){
        return{
            loader: useLoader(),
            clicked: false,
            product: this.$route.params.title?  useProductsStore().products.filter(produc => produc.title === this.$route.params.title.replace(/-/g,' ') )[0] : useLoader().itemShoppingModal,
            category: [],
            cuantity: 1,
            colors: ['negro', 'verde', 'rosa', 'amarillo', 'gris', 'blanco', 'morado', 'rojo', 'azul'],
            color: null,
            imgActice: null,
            cartStore: useCart(),
            sizes : ['s', 'm', 'l', 'xl', 'xxl'],
            size: null,
            coincidencias: null,
            sizeCoincidencias: null,
            difColors:[]
        }
    },
     mounted(){
        this.sizes.forEach(size =>{
            this.product.items.find(item => item.size == size) ? '' : document.getElementById(`size-${size}`).disabled= true 
        })
            
    },
     methods:{
        setSize(size){ 
            if(this.size){
                this.sizes.forEach(size =>{
                    document.getElementById(`size-${size}`).classList.remove('category-selected-box') 
                })
            }
            document.getElementById(`size-${size}`).classList.add('category-selected-box')
            this.size= size
        },
        addToCart(){
            // pasar el producto especidfico
            let itemToCart = {... this.product}
            itemToCart.items =[]
            itemToCart.selectedSize= this.size;

            for (let i = 0; i < this.cuantity; i++) {

                itemToCart.items.push({size: this.size, color: this.color, _id: this.getIdItem(this.size, this.color)})
            }
            console.log(itemToCart);
            this.cartStore.addItemToCart(itemToCart)                
        },
        getIdItem(size, color){
            for (let i = 0; i < this.product.items.length; i++) {
                
                if(this.product.items[i]?.cart?.status == false &&  this.product.items[i].color == color && this.product.items[i].size == size ){
                    this.product.items[i].cart.status = true
                    return this.product.items[i]?._id
                }
            }
            //mostrar que tus articulos ya no tienen existencia nimodo
            return null
        },
        setCategory(category){
            this.category= [];
            if(!this.category.find(cat => cat == category)){
                this.category.push(category)
            }else{
                this.category = this.category.filter(cat => cat != category)
                this.category == undefined ? this.category = [] : 0
            }
            
        },
        setColor(color){
            console.log(color);
            this.color= [];
            if(!this.color.find(cat => cat == color)){
                this.color.push(color)
            }else{
                this.color = this.color.filter(cat => cat != color)
                this.color == undefined ? this.color = [] : 0
            }
        },
        // setMin(){
        //     this.cuantity < 1 ? this.cuantity = 1 : 0
        // }
    },
    watch:{
        size(newval, oldval){
            this.color = null

            if(newval){
                let coincidencias = this.product.items.filter(item =>{

                    if(item.size == newval)
                    return item

                })
               this.coincidencias = coincidencias
               this.sizeCoincidencias = coincidencias
            }
        },
        sizeCoincidencias(newval){
            // console.log(newval);
            let allColors = []
            this.product.items.forEach( item => {
                allColors.push(item.color)
            })
            allColors = [...new Set(allColors)]

            newval.forEach(item => {
                allColors = allColors.filter(ele => ele != item.color) 
            }) 
            this.difColors = allColors

        },
        color(newval, oldval){
            if(newval &&  this.size){
                let coincidencias = this.product.items.filter(item =>{

                    if(item.size == this.size && item.color == newval)
                    return item

                })
               this.coincidencias = coincidencias
            }
        },
    }
}
</script>