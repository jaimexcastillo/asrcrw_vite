<template>
    <div class="container">   
        <div class="row">
            <div class="col-lg-12">
                <div class="product__details__tab">
                    <ul class="nav nav-tabs" role="tablist">
                        <li class="nav-item">
                            <button class="nav-link" :class="[descripcion ? 'active': '']" @click="descripcion=true, guiatallas=false, aux=false"  data-toggle="tab"
                            role="tab">Descripcion</button>
                        </li>
                        <li class="nav-item">
                            <button class="nav-link" :class="[guiatallas ? 'active': '']" @click="guiatallas=true, descripcion=false, aux=false" data-toggle="tab"  
                            role="tab">Guia de tallas</button>
                        </li>
                        <li class="nav-item">
                            <button class="nav-link" :class="[aux ? 'active': '']" @click="guiatallas=false, descripcion=false, aux=true" data-toggle="tab"
                            role="tab">otra cosa? </button>
                        </li>
                    </ul>
                    <div class="tab-content">
                        <div class="tab-pane active" id="tabs-5" role="tabpanel">
                            <div class="product__details__tab__content">
                                <p class="note">no disponible por el momento</p>
                                <div class="product__details__tab__content__item">
                                    <h5>Products Infomation</h5>
                                    <p> {{ item.descripcion || 'no disponible por el momento' }}</p>
                                    <p>
                                        <!-- todo -->
                                    </p>
                                </div>
                                <div class="product__details__tab__content__item">
                                    <h5>Material used</h5>
                                    <p> {{ item.descripcion || 'no disponible por el momento' }}</p>
                                    <p>
                                        <!-- todo -->
                                    </p>
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
    props:['product'],
    data(){
        return{
            descripcion: true,
            guiatallas: false,
            aux: false,
            item: this.product

        }
    }
}
</script>