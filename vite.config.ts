import { defineConfig } from 'vite'
import Solid from 'vite-plugin-solid'
// import Inspect from 'vite-plugin-inspect'
import Pages from 'vite-plugin-pages'
export default defineConfig({
  plugins: [
    Solid(),
    Pages(),
    // Inspect()
  ],
  server: {
    port: 9527,
  },
  build: {
    target: 'esnext',
  },
})
