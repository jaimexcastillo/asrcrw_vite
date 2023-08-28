import { defineStore } from 'pinia'
import { useProductsStore } from './products'

export const useLoader = defineStore('loader', {
    state: () => {
      return { 
        loader : false,
        shoppingModal: false,
        itemShoppingModal: null
      }
    },
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {
      setLoader(val){
        this.loader = val
      },
      async setProducts(){
           await useProductsStore().getProdcuts()
      },
      setShoppingModal(product,val){
        this.itemShoppingModal = product
        this.shoppingModal = val
      }
    },
  })