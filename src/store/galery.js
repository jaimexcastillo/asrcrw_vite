import { defineStore } from 'pinia'


export const useGalery = defineStore('galery', {
    state: () => {
        return { 
          galeryItems: false
        }
    },
    actions: {
        async getGalery(){
            const url = import.meta.env.VITE_APP_URL_SERVER + '/galery'
            const result = await fetch(url)
            const data = await result.json()
            this.galeryItems = data.data;
          }
       
    }

})