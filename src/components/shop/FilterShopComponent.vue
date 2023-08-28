<template>
    <div class="col-lg-3">
        <div class="shop__sidebar">
            <div class="shop__sidebar__search">
                <form action="#">
                    <input type="text" placeholder="Busca...">
                    <button type="submit"><span class="icon_search"></span></button>
                </form>
            </div>
            <div class="shop__sidebar__accordion">
                <div class="accordion" id="accordionExample">
                    <div class="card">
                        <div class="card-heading">
                            <a data-toggle="collapse" data-target="#collapseOne">Categoria</a>
                        </div>
                        <div id="collapseOne" class="collapse show" data-parent="#accordionExample">
                            <div class="card-body">
                                <div class="shop__sidebar__categories">
                                    <ul class="nice-scroll">
                                        <li @click="setCategory('hombres')" v-bind:class="[ category.find(ele => ele == 'hombres' )  ? 'category-selected' : '']" class="select-category">Hombres (20)</li>
                                        <li @click="setCategory('mujeres')" v-bind:class="[ category.find(ele => ele == 'mujeres' )  ? 'category-selected' : '']" class="select-category">Mujeres (20)</li>
                                        <li @click="setCategory('ninos')" v-bind:class="[ category.find(ele => ele == 'ninos' )  ? 'category-selected' : '']" class="select-category">Niños (20)</li>
                                        <li @click="setCategory('accesorios')" v-bind:class="[ category.find(ele => ele == 'accesorios' )  ? 'category-selected' : '']" class="select-category">Accesorios (20)</li>
                                        <!-- <li><a href="#">Shoes (20)</a></li>
                                        <li><a href="#">Accessories (20)</a></li> -->
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-heading">
                            <a data-toggle="collapse" data-target="#collapseTwo">Tipo</a>
                        </div>
                        <div id="collapseTwo" class="collapse show" data-parent="#accordionExample">
                            <div class="card-body">
                                <div class="shop__sidebar__brand">
                                    <ul>
                                        <li @click="setCategory('camisas')" v-bind:class="[ category.find(ele => ele == 'camisas' )  ? 'category-selected' : '']" class="select-category">Camisas</li>
                                        <li @click="setCategory('sudadera')" v-bind:class="[ category.find(ele => ele == 'sudadera' )  ? 'category-selected' : '']" class="select-category">Sudaderas</li>
                                        <li @click="setCategory('jaqueta')" v-bind:class="[ category.find(ele => ele == 'jaqueta' )  ? 'category-selected' : '']" class="select-category">Jaqueta</li>
                                        <li @click="setCategory('gorrito')" v-bind:class="[ category.find(ele => ele == 'gorrito' )  ? 'category-selected' : '']" class="select-category">Gorrito</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-heading">
                            <a data-toggle="collapse" data-target="#collapseThree">Filtrar por Precios</a>
                        </div>
                        <div id="collapseThree" class="collapse show" data-parent="#accordionExample">
                            <div class="card-body">
                                <div class="shop__sidebar__price">
                                    <ul>
                                        <li @click="setCategory('0-100')" v-bind:class="[ category.find(ele => ele == '0-100' )  ? 'category-selected' : '']" class="select-category">$0.00 - $100.00</li>
                                        <li @click="setCategory('100-200')" v-bind:class="[ category.find(ele => ele == '100-200' )  ? 'category-selected' : '']" class="select-category">$100.00 - $200.00</li>
                                        <li @click="setCategory('200-350')" v-bind:class="[ category.find(ele => ele == '200-350' )  ? 'category-selected' : '']" class="select-category">$200.00 - $350.00</li>
                                        <li @click="setCategory('350-500')" v-bind:class="[ category.find(ele => ele == '350-500' )  ? 'category-selected' : '']" class="select-category">$350.00 - $500.00</li>
                                        <li @click="setCategory('500-1000')" v-bind:class="[ category.find(ele => ele == '500-1000' )  ? 'category-selected' : '']" class="select-category">$500.00 - $1000.00</li>
                                        <li @click="setCategory('1000')" v-bind:class="[ category.find(ele => ele == '1000' )  ? 'category-selected' : '']" class="select-category">1000.00+</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-heading">
                            <a data-toggle="collapse" data-target="#collapseFour">Tallas</a>
                        </div>
                        <div id="collapseFour" class="collapse show" data-parent="#accordionExample">
                            <div class="card-body">
                                <div class="shop__sidebar__size">
                                    <label for="xs" @click="setCategory('xs')"  v-bind:class="[ category.find(ele => ele == 'xs' )  ? 'category-selected-box' : '']" class="select-category">xs
                                        <!-- <input type="radio" id="xs"> -->
                                    </label>
                                    <label for="sm" @click="setCategory('s')" v-bind:class="[ category.find(ele => ele == 's' )  ? 'category-selected-box' : '']" class="select-category">s
                                        <!-- <input type="radio" id="sm"> -->
                                    </label>
                                    <label for="md" @click="setCategory('m')" v-bind:class="[ category.find(ele => ele == 'm' )  ? 'category-selected-box' : '']" class="select-category">m
                                        <!-- <input type="radio" id="md"> -->
                                    </label>
                                    <label for="xl" @click="setCategory('xl')" v-bind:class="[ category.find(ele => ele == 'xl' )  ? 'category-selected-box' : '']" class="select-category">xl
                                        <!-- <input type="radio" id="xl"> -->
                                    </label>
                                    <label for="2xl" @click="setCategory('2xl')" v-bind:class="[ category.find(ele => ele == '2xl' )  ? 'category-selected-box' : '']" class="select-category">2xl
                                        <!-- <input type="radio" id="2xl"> -->
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-heading">
                            <a data-toggle="collapse" data-target="#collapseFive">Color</a>
                        </div>
                        <div id="collapseFive" class="collapse show" data-parent="#accordionExample">
                            <div class="card-body">
                                <div class="shop__sidebar__color">
                                    <label class="c-1" for="sp-1" @click="setCategory('negro')" v-bind:class="[ category.find(ele => ele == 'negro' )  ? 'category-selected-color' : '']">
                                        <!-- <input type="radio" id="sp-1"> -->
                                    </label>
                                    <label class="c-2" for="sp-2" @click="setCategory('azul')" v-bind:class="[ category.find(ele => ele == 'azul' )  ? 'category-selected-color' : '']"> 
                                        <!-- <input type="radio" id="sp-2"> -->
                                    </label>
                                    <label class="c-3" for="sp-3" @click="setCategory('amarillo')" v-bind:class="[ category.find(ele => ele == 'amarillo' )  ? 'category-selected-color' : '']">
                                        <!-- <input type="radio" id="sp-3"> -->
                                    </label>
                                    <label class="c-4" for="sp-4" @click="setCategory('gris')" v-bind:class="[ category.find(ele => ele == 'gris' )  ? 'category-selected-color' : '']">
                                        <!-- <input type="radio" id="sp-4"> -->
                                    </label>
                                    <label class="c-5" for="sp-5" @click="setCategory('verde')" v-bind:class="[ category.find(ele => ele == 'verde' )  ? 'category-selected-color' : '']">
                                        <!-- <input type="radio" id="sp-4"> -->
                                    </label>
                                    <label class="c-6" for="sp-6" @click="setCategory('rosa')" v-bind:class="[ category.find(ele => ele == 'rosa' )  ? 'category-selected-color' : '']"> 
                                        <!-- <input type="radio" id="sp-6"> -->
                                    </label>
                                    <label class="c-7" for="sp-7" @click="setCategory('morado')" v-bind:class="[ category.find(ele => ele == 'morado' )  ? 'category-selected-color' : '']">
                                        <!-- <input type="radio" id="sp-7"> -->
                                    </label>
                                    <label class="c-8" for="sp-8" @click="setCategory('rojo')" v-bind:class="[ category.find(ele => ele == 'rojo' )  ? 'category-selected-color' : '']">
                                        <!-- <input type="radio" id="sp-8"> -->
                                    </label>
                                    <label class="c-9" for="sp-9" @click="setCategory('blanco')" v-bind:class="[ category.find(ele => ele == 'blanco' )  ? 'category-selected-color' : '']">
                                        <!-- <input type="radio" id="sp-9"> -->
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['categories'],
    data(){
        return{
            category: [],
        }
    },
    methods:{
        setCategory(category){
            if(!this.category.find(cat => cat == category)){
                this.category.push(category)
            }else{
                this.category = this.category.filter(cat => cat != category)
                this.category == undefined ? this.category = [] : 0
            }
            this.$emit('filterCategories', this.category)
        },
    },
    watch:{
        categories:{
            inmediate: true,
            handler(newVal){
                this.category = newVal
            }
        }
    }
}
</script>
