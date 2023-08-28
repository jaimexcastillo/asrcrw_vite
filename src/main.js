import { createApp, defineAsyncComponent } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/bootstrap.min.css'
import '@/assets/css/font-awesome.min.css'
import { createPinia } from 'pinia'
// import VueCompositionAPI from '@vue/composition-api'

const pinia = createPinia()
// Vue.use(VueCompositionAPI)
const app = createApp(App)



app.config.productionTip = false
app
    .component('off-header-component',defineAsyncComponent(() => import('@/components/base/OffsetHeaderComponent.vue') ))
    .component('header-component',defineAsyncComponent(() => import('@/components/base/HeaderComponent.vue') ))

    .component('carousel-component',defineAsyncComponent(() => import('@/components/CarouselComponent.vue') ))
    .component('banner-component',defineAsyncComponent(() => import('@/components/BannerComponent.vue') ))
    .component('quick-store-component',defineAsyncComponent(() => import('@/components/QuickStoreComponent.vue') ))
    .component('product-card-component',defineAsyncComponent(() => import('@/components/product/ProductCardComponent.vue') ))
    .component('instagram-component',defineAsyncComponent(() => import('@/components/InstagramComponent.vue') ))

    .component('shop-component',defineAsyncComponent(() => import('@/components/shop/ShopComponent.vue') ))
    .component('filter-shop-component',defineAsyncComponent(() => import('@/components/shop/FilterShopComponent.vue') ))

    .component('product-detail-component',defineAsyncComponent(() => import('@/components/product/ProductDetailComponent.vue') ))
    .component('window-info-component',defineAsyncComponent(() => import('@/components/product/WindowInfoComponent.vue')))

    .component('list-item-component',defineAsyncComponent(() => import('@/components/cart/ListItemComponent.vue') ))
    .component('cart-setter-component',defineAsyncComponent(() => import('@/components/cart/CartSetterComponent.vue')) )
    .component('total-buy-component',defineAsyncComponent(() => import('@/components/cart/TotalBuyComponent.vue') ))


    .component('vue-loader-component',defineAsyncComponent(() => import('@/components/VueLoaderComponent.vue') ))
    .component('shopping-modal-component',defineAsyncComponent(() => import('@/components/cart/ShoppingModalComponent.vue') ))
    .component('footer-component',defineAsyncComponent(() => import('@/components/base/FooterComponent.vue') ))

    .component('vue-inner-zoom-component', defineAsyncComponent(()  => import('@/components/base/InnerimageZoomComponent.vue') ))
  
app
    .use(pinia)
    .use(router)
    .mount('#app')