import { defineStore } from 'pinia'
// import jsonProducts from '@/assets/data/product.js'

export const useProductsStore = defineStore('products', {
    state: () => {
      return { products: [], acces_token: null }
    },
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {
      async getProdcuts(){
        const url = import.meta.env.VITE_APP_URL_SERVER + '/products'
        // console.log(url);
        const result = await fetch(url)
        const data = await result.json()
        this.products = data.data;
        //datos de prueba
        // this.products= jsonProducts
        // setTimeout(() => {
        //   this.products = data.data
        // }, 1000);
      },
      // async auth(){
      //   const url = import.meta.env.VITE_APP_URL_SERVER + '/auth'
      //   console.log(url);
      //   const result = await fetch(url,{
      //     method: "POST",
      //     headers: {
      //       'Content-Type': 'application/json'  
      //     },
      //     body: JSON.stringify({email: "jaime@gmail.com", password: "pass123"})
      //   })
      //   const data = await result.json()
      //   this.acces_token = data.token
      // }
    },
  })