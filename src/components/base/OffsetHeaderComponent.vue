<template>
  <div>
    <header class="header" v-if="show">
        <div class="header__top">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 col-md-7">
                        <div class="header__top__left">
                            <p>Envios a todo México.</p>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-5">
                        <div class="header__top__right">
                            <div class="header__top__links">
                            <!-- <a href="#">Sign in</a> -->
                                <a href="#">FAQs</a>
                            </div>
                            <div class="header__top__hover">
                                <span>MXN <i class="arrow_carrot-down"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="close-header header__top" @click="show = false"> x </div>
    </header>
  </div>
</template>

<script>
export default {   
    data(){
        return{
            show: true
        }
    }

}
</script>