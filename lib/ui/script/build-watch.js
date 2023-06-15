import { access, rmdir } from 'node:fs/promises'
import { build } from 'vite'
import packageJson from '../package.json' assert { type: 'json' }
import { resolve } from 'path'

const root = process.cwd(),
      { outfile } = packageJson

/**
 * 构建
 */
async function main() {
  const dist = resolve(root, 'dist')
  var accessed = false,
      minify = true

  try {
    await access(dist)
    accessed = true
  } catch {
    console.error('cannot access dist')
  }

  let removed

  try {
    accessed && await rmdir(dist, { recursive: true })
    removed = true
  } catch (e) {
    console.error('cannot remove dist')
    throw e
  }

  if (removed) {
    const config = {
      root,
      mode: 'development',
      build: {
        watch: true
      }
    },
          fileName = format => {
            if (format === 'css') return `style${minify ? '.min' : ''}.css`
            else return `${outfile}.${format === 'es' ? 'esm' : format}.browser${minify ? '.min' : ''}.js`
          }

    build(config)

    const componentConfig = {
      root,
      mode: 'development',
      build: {
        emptyOutDir: false,
        lib: {
          entry: resolve(root, 'src/components/WatermarkHelper.vue')
        },
        rollupOptions: {
          external: ['vue', 'element-ui', '@cailiao/watermark-vue2-component']
        },
        outDir: 'dist/Component',
        watch: true
      }
    }

    build(componentConfig)

    config.build.minify = componentConfig.build.minify = minify = false
    config.build.lib = { fileName }
    componentConfig.build.lib.fileName = fileName

    build(config)

    build(componentConfig)
  }
}

main()
