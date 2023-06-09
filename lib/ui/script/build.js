import { build } from 'vite'
import { resolve } from 'path'

const root = process.cwd()

/**
 * 构建
 */
async function main() {
  // 执行构建
  await build({
    root
  })

  build({
    root,
    mode: 'Component',
    build: {
      rollupOptions: {
        external: ['vue', 'element-ui']
      },
      outDir: 'dist/Component',
      lib: {
        entry: resolve(root, 'src/components/WatermarkHepler.vue')
      }
    }
  })
}

main()
