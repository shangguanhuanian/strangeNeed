import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import WindiCSS from 'vite-plugin-windicss'
import path  from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),WindiCSS()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
      // "~":path.resolve(__dirname,"src")
    }
  }
})
