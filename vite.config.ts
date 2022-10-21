import { defineConfig } from 'vite'
import Solid from 'vite-plugin-solid'
// import Inspect from 'vite-plugin-inspect'
import Pages from 'vite-plugin-pages'
export default defineConfig({
  plugins: [
    Solid(),
    // https://www.npmjs.com/package/vite-plugin-pages
    Pages({
      // dirs:[
        // {dir:"src/pages", baseRoute:""}, // for docs
      // ],
      // importMode: 'async', // or sync
      importMode(filepath, options) {
        // default resolver
        // for (const page of options.dirs) {
        //   if (page.baseRoute === '' && filepath.startsWith(`/${page.dir}/index`))
        //     return 'sync'
        // }
        // return 'async'
        // Load about page synchronously, all other pages are async.
        return filepath.includes('about') ? 'async' : 'sync'
      },
    }),
    // Inspect()
  ],
  server: {
    port: 3333,
  },
  build: {
    target: 'esnext',
  },
})
