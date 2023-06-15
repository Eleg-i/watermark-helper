import alias from 'esbuild-plugin-alias'
import esbuild from 'esbuild'
import packageJson from '../package.json' assert { type: 'json' }
import { resolve } from 'path'

const { entry, outfile } = packageJson

/**
 * 开始构建
 * @param {String} platform 构建的平台类型
 */
function build(platform) {
  buildInFormat('cjs', platform)
  buildInFormat('esm', platform)
}

/**
 * 根据模块类型构建
 * @param {String} format 构建的模块类型
 * @param {String} platform 构建的平台类型
 */
async function buildInFormat(format, platform) {
  const config = {
    bundle: true,
    entryPoints: entry,
    format,
    loader: {
      '.css': 'text'
    },
    minify: true,
    outfile: `dist/${outfile}.${format}.${platform}.min.js`,
    platform,
    plugins: [
      alias({
        '@cailiao/watermark-helper-ui': resolve(process.cwd(), './lib/ui/dist/watermarkHelperUI.esm.browser.js'),
        '@cailiao/watermark-helper-ui/dist/style.css': resolve(process.cwd(), './lib/ui/dist/style.css')
      })
    ],
    target: 'esnext',
    watch: {
      onRebuild(error, result) {
        if (error) console.error('watch build failed:', error)
        // eslint-disable-next-line no-console
        else console.log('watch build succeeded:', result)
      }
    }
  }

  await esbuild.build(config).catch(() => process.exit(1))
  config.minify = false
  config.outfile = `dist/${outfile}.${format}.${platform}.js`
  esbuild.build(config).catch(() => process.exit(1))
}

// build('node')
build('browser')
