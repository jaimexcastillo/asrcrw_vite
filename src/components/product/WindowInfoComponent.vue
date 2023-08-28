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
                                <p class="note">Nam tempus turpis at metus scelerisque placerat nulla deumantos
                                    solicitud felis. Pellentesque diam dolor, elementum etos lobortis des mollis
                                    ut risus. Sedcus faucibus an sullamcorper mattis drostique des commodo
                                pharetras loremos.</p>
                                <div class="product__details__tab__content__item">
                                    <h5>Products Infomation</h5>
                                    <p>A Pocket PC is a handheld computer, which features many of the same
                                        capabilities as a modern PC. These handy little devices allow
                                        individuals to retrieve and store e-mail messages, create a contact
                                        file, coordinate appointments, surf the internet, exchange text messages
                                        and more. Every product that is labeled as a Pocket PC must be
                                        accompanied with specific software to operate the unit and must feature
                                    a touchscreen and touchpad.</p>
                                    <p>As is the case with any new technology product, the cost of a Pocket PC
                                        was substantial during is early release. For approximately $700.00,
                                        consumers could purchase one of top-of-the-line Pocket PCs in 2003.
                                        These days, customers are finding that prices have become much more
                                        reasonable now that the newness is wearing off. For approximately
                                    $350.00, a new Pocket PC can now be purchased.</p>
                                </div>
                                <div class="product__details__tab__content__item">
                                    <h5>Material used</h5>
                                    <p>Polyester is deemed lower quality due to its none natural qualits. Made
                                        from synthetic materials, not natural like wool. Polyester suits become
                                        creased easily and are known for not being breathable. Polyester suits
                                        tend to have a shine to them compared to wool and cotton suits, this can
                                        make the suit look cheap. The texture of velvet is luxurious and
                                        breathable. Velvet is a great choice for dinner party jacket and can be
                                    worn all year round.</p>
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