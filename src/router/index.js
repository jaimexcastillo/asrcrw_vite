import { createWebHistory, createRouter } from "vue-router";


const routes = [
  {
    path: '/',
    name: 'Home',
    component:  () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/galery',
    name: 'Galery',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/shop',
    name: 'Shop',
    props: { NewCategories: [] },
    component: () => import(/* webpackChunkName: "about" */ '../views/Shop.vue')
  },
  {
    path: '/shop/hombres',
    name: 'ShopHombres',
    props: { NewCategories: ['hombres'] },
    component: () => import(/* webpackChunkName: "about" */ '../views/Shop.vue')
  },
  {
    path: '/shop/mujeres',
    name: 'ShopMujeres',
    props: { NewCategories: ['mujeres'] },
    component: () => import(/* webpackChunkName: "about" */ '../views/Shop.vue')
  },
  {
    path: '/shop/ninos',
    name: 'ShopNinos',
    props: { NewCategories: ['ninos'] },
    component: () => import(/* webpackChunkName: "about" */ '../views/Shop.vue')
  },
  {
    path: '/shop/accesorios',
    name: 'ShopAccesorios',
    props: { NewCategories: ['accesorios'] },
    component: () => import(/* webpackChunkName: "about" */ '../views/Shop.vue')
  },
  {
    path: '/product/:title',
    name: 'ProductDetails',
    // params: { NewCategories: ['accesorios'] },
    component: () => import(/* webpackChunkName: "about" */ '../views/Product.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    // params: { NewCategories: ['accesorios'] },
    component: () => import(/* webpackChunkName: "about" */ '../views/Cart.vue')
  },
]


const router = createRouter({
  history: createWebHistory('/'),
  routes,
});


export default router
