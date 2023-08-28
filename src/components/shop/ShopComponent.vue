<template>
    <div class="col-lg-9">
        <div class="shop__product__option">
            <div class="row">
                <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="shop__product__option__left">
                        <p>Mostrando {{products.length}} de {{products.length}} productos</p>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="shop__product__option__right">
                        <p>Sort by Price:</p>
                        <select>
                            <option value="">Low To High</option>
                            <option value="">$0 - $55</option>
                            <option value="">$55 - $100</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
        <product-card-component :filteredCategories="filteredCategories" clases="col-lg-4 col-md-6 col-sm-6"/>
        <!-- <div class="row">
            <div class="col-lg-12">
                <div class="product__pagination">
                    <a class="active" href="#">1</a>
                    <a href="#">2</a>
                    <a href="#">3</a>
                    <span>...</span>
                    <a href="#">21</a>
                </div>
            </div>
        </div> -->
    </div>
</template>

<script>
import {useProductsStore} from '../../store'

export default {
    props: ['filteredCategories'],
    data(){
        return{
            products: useProductsStore().products,
        }
    }
}
</script>
