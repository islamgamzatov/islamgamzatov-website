import { defineConfig } from 'vite'

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "/src/styles/helpers/index.scss" as *;`
      }
    }
  }
})