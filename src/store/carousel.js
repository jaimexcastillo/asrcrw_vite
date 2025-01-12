import { defineStore } from 'pinia'


export const useCarousel = defineStore('carousel', {
    state: () => {
        return { 
          carouselItems: false
        }
    },
    actions: {
        async getCarousel(){
            const url = import.meta.env.VITE_APP_URL_SERVER + '/carousel'
            const result = await fetch(url)
            const data = await result.json()
            this.carouselItems = data.data;
          }
    }

})