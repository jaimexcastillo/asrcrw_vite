import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'url';


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    base: process.env.NODE_ENV === "development" ? "/" : "/",
    lintOnSave: false,
    resolve:{
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    css: {
      loaderOptions: {
          sass: {
              additionalData: `@import "@/assets/scss/style.scss";`
          }
      }
    },
    build: {
        rollupOptions: {
          external: 'NonExistingPath'
        }
      },
})
