import { entry, outfile } from './package.json'
import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue2'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, entry),
      fileName: format => `${outfile}.${format === 'es' ? 'esm' : format}.browser.min.js`,
      formats: ['es', 'cjs']
    }
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production')
  }
})
