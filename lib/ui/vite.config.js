import { defineConfig } from 'vite'
import { entry } from './package.json'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue2'

export default defineConfig(({ mode }) => {
  var resolveAlias = {}
  const dev = mode === 'development'

  if (dev)
    resolveAlias = {
      '@cailiao/watermark-vue2-component': resolve(
        __dirname,
        '../../../vue2-component/dist/watermarkVue2Component.esm.browser.js'
      )
    }

  return {
    plugins: [vue()],
    build: {
      emptyOutDir: false,
      lib: {
        entry: resolve(__dirname, entry),
        formats: ['es', 'cjs']
      }
    },
    resolve: {
      alias: resolveAlias
    }
  }
})
