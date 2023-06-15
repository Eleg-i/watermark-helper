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
  var accessed = false

  try {
    await access(dist)
    accessed = true
  } catch {
    console.error('cannot access dist')
  }

  try {
    accessed && await rmdir(dist, { recursive: true })
  } catch (e) {
    console.error('cannot remove dist')
    throw e
  }

  const fileName = format => `${outfile}.${format === 'es' ? 'esm' : format}.browser.js`,
        miniFileName = format => `${outfile}.${format === 'es' ? 'esm' : format}.browser.min.js`

  build({
    root,
    build: {
      lib: {
        fileName: miniFileName
      },
      rollupOptions: {
        output: {
          assetFileNames: 'style.min.css'
        }
      }
    }
  })
  build({
    root,
    build: {
      minify: false,
      lib: { fileName },
      rollupOptions: {
        output: {
          assetFileNames: 'style.css'
        }
      }
    }
  })

  let componentConfig = {
    root,
    build: {
      rollupOptions: {
        external: ['vue', 'element-ui', '@cailiao/watermark-vue2-component'],
        output: {
          assetFileNames: 'style.min.css'
        }
      },
      outDir: 'dist/Component',
      lib: {
        entry: resolve(root, 'src/components/WatermarkHelper.vue'),
        fileName: miniFileName
      }
    }
  }

  build(componentConfig)

  componentConfig = {
    root,
    build: {
      minify: false,
      rollupOptions: {
        external: ['vue', 'element-ui', '@cailiao/watermark-vue2-component'],
        output: {
          assetFileNames: 'style.css'
        }
      },
      outDir: 'dist/Component',
      lib: {
        entry: resolve(root, 'src/components/WatermarkHelper.vue'),
        fileName
      }
    }
  }

  build(componentConfig)
}

main()
