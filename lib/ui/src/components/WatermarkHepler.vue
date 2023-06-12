<template>
  <div class="watermark-hepler">
    <h4 class="title">水印开发帮助工具</h4>
    <Watermark ref="watermark" v-bind="watermarkCfg" @inited="init">
      <div class="watermark-hepler-demo-content">
        <p>本工具是 <code> @cailiao/watermark </code> 的水印可视化编辑工具。</p>
        <p>本工具的有效参数有水印字体，水印图片，倾斜角度，行间隔，行高，偏移量等。</p>
        <p>其它参数，如定位叠层，也可以在本工具调整，但是其实时预览没参考意义，需要至具体场景比较。</p>
        <p>This tool is a watermark visual editing tool for <code> @cailiao/watermark </code>.</p>
        <p>
          The valid parameters of this tool are watermark font, watermark image, tilt angle, line spacing, line height,
          offset, etc.
        </p>
        <p>
          Other parameters can also be adjusted in this tool, but the real-time preview is not meaningful, and needs to
          be compared in specific scenarios.
        </p>
      </div>
    </Watermark>
    <el-form :size="formSize" class="dev-tools" width="300px" label-position="right" label-width="68px">
      <el-form-item label="水印文本">
        <el-input v-model="content" :size="formSize" type="textarea" placeholder="请输入水印文本内容" />
      </el-form-item>
      <el-form-item label="字体：" class="" label-position="top">
        <div class="row">
          <div class="col">
            <el-form-item label="文本字体">
              <el-input v-model="font.fontFamily" placeholder="请输入内容" />
            </el-form-item>
          </div>
          <div class="col">
            <el-form-item label="字体粗细">
              <el-select
                v-model="font.fontWeight"
                :allow-create="true"
                :filterable="true"
                :popper-append-to-body="false"
                placeholder="请选择"
              >
                <el-option v-for="value in font.fontWeightOptions" :key="value" :label="value" :value="value" />
              </el-select>
            </el-form-item>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <el-form-item label="字体颜色">
              <div class="picker-contanier">
                <ElColorPicker v-model="font.color" color-format="hsl" :show-alpha="true" />
              </div>
            </el-form-item>
          </div>
          <div class="col">
            <el-form-item label="字体样式">
              <el-select v-model="font.fontStyle" :popper-append-to-body="false" placeholder="请选择">
                <el-option v-for="value in font.fontStyleOptions" :key="value" :label="value" :value="value" />
              </el-select>
            </el-form-item>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <el-form-item label="工具示例文本背景颜色" label-width="154px">
              <div class="picker-contanier">
                <ElColorPicker v-model="demoTextBackground" color-format="hsl" :show-alpha="true" />
              </div>
            </el-form-item>
          </div>
          <div class="col">
            <el-form-item label="字体大小">
              <div class="slider">
                <el-slider
                  v-model="font.fontSize"
                  :input-size="formSize"
                  :max="font.fontSizeMax"
                  :min="font.fontSizeMin"
                  :show-input-controls="false"
                  show-input
                />
              </div>
            </el-form-item>
          </div>
        </div>
      </el-form-item>
      <el-form-item label="水印图片">
        <div class="row">
          <div class="col">
            <el-form-item>
              <div class="slider">
                <el-input v-model="image.src" placeholder="请输入图片地址，支持 DataURL" />
              </div>
            </el-form-item>
          </div>
          <div class="col">
            <el-form-item label="图片透明度" label-width="84px">
              <div class="slider">
                <el-slider
                  v-model="image.alpha.value"
                  :input-size="formSize"
                  :max="image.alpha.alphaMax"
                  :min="image.alpha.alphaMin"
                  :show-input-controls="false"
                  :step="0.01"
                  show-input
                />
              </div>
            </el-form-item>
          </div>
        </div>
      </el-form-item>
      <el-form-item label="倾斜角度">
        <div class="slider">
          <el-slider
            v-model="rotate.value"
            :input-size="formSize"
            :max="rotate.rotateMax"
            :min="rotate.rotateMin"
            :show-input-controls="false"
            show-input
          />
        </div>
      </el-form-item>
      <el-form-item label="行高">
        <div class="slider">
          <el-slider
            v-model="lineHeight.value"
            :input-size="formSize"
            :max="lineHeight.lineHeightMax"
            :min="lineHeight.lineHeightMin"
            :show-input-controls="false"
            show-input
          />
        </div>
      </el-form-item>
      <el-form-item label="水印偏移">
        <div class="row">
          <div class="col">
            <el-form-item label="水平偏移">
              <div class="slider">
                <el-slider
                  v-model="offset.x"
                  :input-size="formSize"
                  :max="offset.xMax"
                  :min="offset.xMin"
                  :show-input-controls="false"
                  show-input
                />
              </div>
            </el-form-item>
          </div>
          <div class="col">
            <el-form-item label="垂直偏移">
              <div class="slider">
                <el-slider
                  v-model="offset.y"
                  :input-size="formSize"
                  :max="offset.yMax"
                  :min="offset.yMin"
                  :show-input-controls="false"
                  show-input
                />
              </div>
            </el-form-item>
          </div>
        </div>
        <el-form-item label="平行间距">
          <div class="slider">
            <el-slider
              v-model="gap.value"
              :input-size="formSize"
              :max="gap.gapMax"
              :min="gap.gapMin"
              :show-input-controls="false"
              show-input
            />
          </div>
        </el-form-item>
      </el-form-item>
      <el-form-item label="图片偏移">
        <div class="row">
          <div class="col">
            <el-form-item label="水平偏移">
              <div class="slider">
                <el-slider
                  v-model="image.offset.x"
                  :input-size="formSize"
                  :max="image.offset.xMax"
                  :min="image.offset.xMin"
                  :show-input-controls="false"
                  show-input
                />
              </div>
            </el-form-item>
          </div>
          <div class="col">
            <el-form-item label="垂直偏移">
              <div class="slider">
                <el-slider
                  v-model="image.offset.y"
                  :input-size="formSize"
                  :max="image.offset.yMax"
                  :min="image.offset.yMin"
                  :show-input-controls="false"
                  show-input
                />
              </div>
            </el-form-item>
          </div>
        </div>
      </el-form-item>
      <el-form-item label="定位叠层">
        <el-input v-model="zIndex" placeholder="请输入z-index" type="number" />
      </el-form-item>
    </el-form>
    <div class="actions">
      <el-button ref="copyBtn" type="primary" @click="getCfg" @mouseleave.native="submitBtnText = '获取配置'">
        {{ submitBtnText }}
      </el-button>
      <el-button type="danger" @click="clear">重置配置</el-button>
    </div>
    <el-alert v-if="error" title="无法复制到剪切板！或于控制台手动复制配置信息。" type="error" center show-icon />
  </div>
</template>

<script>
import { Alert, Button, ColorPicker, Form, FormItem, Input, Option, Popconfirm, Select, Slider } from 'element-ui'
import Watermark from '@cailiao/watermark-vue2-component'
import { watchBox } from '@cailiao/watch-dom'

var rootEl

const sliderTooltip = Slider.components.SliderButton.components.ElTooltip,
      ColorPickerDropdown = ColorPicker.components.PickerDropdown,
      mode = import.meta.env.MODE,
      components =
    mode === 'Component'
      ? {}
      : {
        [Alert.name]: Alert,
        [Button.name]: Button,
        [ColorPicker.name]: ColorPicker,
        [Form.name]: Form,
        [FormItem.name]: FormItem,
        [Input.name]: Input,
        [Option.name]: Option,
        [Popconfirm.name]: Popconfirm,
        [Select.name]: Select,
        [Slider.name]: Slider
      }

sliderTooltip.mixins.push({
  props: { appendToBody: { default: false } },
  methods: {
    createPopper() {
      sliderTooltip.mixins[0].methods.createPopper.call(this)
      if (this.popperElm) rootEl.appendChild(this.popperElm)
    }
  }
})

ColorPickerDropdown.mixins.push({ props: { appendToBody: { default: false } } })

export default {
  components: {
    ...components,
    Watermark
  },
  data() {
    return {
      content: '',
      demoTextBackground: 'hsla(0, 0%, 90%)',
      error: false,
      font: {
        color: 'hsla(0, 0%, 50%, 0.5)',
        fontFamily: '',
        fontSize: 16,
        fontSizeMax: 75,
        fontSizeMin: 1,
        fontStyle: 'normal',
        fontStyleOptions: ['normal', 'italic', 'oblique'],
        fontWeight: 'normal',
        fontWeightOptions: ['normal', 'lighter', 'bolder', 'bold']
      },
      formSize: 'small',
      gap: {
        value: 100,
        gapMax: 1000,
        gapMin: 0
      },
      image: {
        src: '',
        offset: {
          x: 0,
          xMax: 1000,
          xMin: 0,
          y: 0,
          yMax: 1000,
          yMin: 0
        },
        alpha: {
          value: 1,
          alphaMax: 1,
          alphaMin: 0
        }
      },
      lineHeight: {
        value: 1.5,
        lineHeightMax: 10,
        lineHeightMin: 0.5
      },
      offset: {
        x: 100,
        xMax: 1000,
        xMin: 0,
        y: 100,
        yMax: 1000,
        yMin: 0
      },
      rotate: {
        value: 360 - 37,
        rotateMax: 360,
        rotateMin: 0
      },
      submitBtnText: '获取配置',
      watermarkRerenderKey: 0,
      zIndex: undefined
    }
  },
  computed: {
    watermarkCfg() {
      const {
        content,
        font: { fontSize, fontFamily, fontWeight, fontStyle, color },
        gap: { value: gap },
        image: {
          alpha: { value: alpha },
          src,
          offset: { x: imageOffsetX, y: imageOffsetY }
        },
        lineHeight: { value: lineHeight },
        offset: { x: offsetX, y: offsetY },
        rotate: { value: rotate },
        zIndex
      } = this,
            config = {},
            innerConfig = {
              content: content.trim(),
              font: {
                fontSize,
                fontFamily,
                fontWeight: Number.isNaN(parseInt(fontWeight)) ? fontWeight : parseInt(fontWeight),
                fontStyle,
                color
              },
              gap,
              image: {
                alpha,
                src,
                offset: [imageOffsetX, imageOffsetY]
              },
              lineHeight,
              offset: [offsetX, offsetY],
              rotate,
              zIndex: Number.isNaN(parseInt(zIndex)) ? zIndex : parseInt(zIndex)
            },
        // 递归合并 config 和 innerConfig 如果 innerConfig 的值为 undefined 则不合并
            merge = (config, innerConfig) => {
              for (const key in innerConfig) {
                const innerValue = innerConfig[key]

                if (typeof innerValue === 'object' && innerValue !== null && !Array.isArray(innerValue))
                  config[key] = merge(config[key] || {}, innerValue)
                else if ((innerValue ?? null) !== null && innerValue !== '') config[key] = innerValue
              }

              return config
            }

      return merge(config, innerConfig)
    }
  },
  watch: {
    demoTextBackground(newVal) {
      this.$el.style.setProperty('--demo-background-color', newVal)
    },
    'rotate.value': 'watchRotateGapHandler',
    'gap.value': 'watchRotateGapHandler'
  },
  mounted() {
    rootEl = this.$el
  },
  methods: {
    clear() {
      this.content = ''
      this.demoTextBackground = 'hsla(0, 0%, 90%)'
      this.error = false
      this.font = {
        color: 'hsla(0, 0%, 50%, 0.5)',
        fontFamily: '',
        fontSize: 16,
        fontSizeMax: 75,
        fontSizeMin: 1,
        fontStyle: '',
        fontStyleOptions: ['normal', 'italic', 'oblique'],
        fontWeight: '',
        fontWeightOptions: ['normal', 'lighter', 'bolder', 'bold']
      }
      this.gap = {
        value: 100,
        gapMax: 1000,
        gapMin: 0
      }
      this.image = {
        alpha: {
          value: 1,
          alphaMax: 1,
          alphaMin: 0
        },
        src: '',
        offset: {
          x: 0,
          xMax: 1000,
          xMin: 0,
          y: 0,
          yMax: 1000,
          yMin: 0
        }
      }
      this.lineHeight = {
        value: 1.5,
        lineHeightMax: 10,
        lineHeightMin: 0.5
      }
      this.offset = {
        x: 100,
        xMax: 1000,
        xMin: 0,
        y: 100,
        yMax: 1000,
        yMin: 0
      }
      this.rotate = {
        value: 360 - 37,
        rotateMax: 360,
        rotateMin: 0
      }
      this.zIndex = undefined
    },
    getCfg() {
      const text = JSON.stringify(this.watermarkCfg, null, 2),
            data = new DataTransfer(),
            copyEvent = new ClipboardEvent('copy', { clipboardData: data })

      /**
       * 复制处理函数
       * @param {ClipboardEvent} event
       */
      function copyHandler(event) {
        // 阻止默认行为
        event.preventDefault()
        // 将 clipboardData 的值写入剪切板
        event.clipboardData.setData('text/plain', copyEvent.clipboardData.getData('text/plain'))
        document.removeEventListener('copy', copyHandler)
      }

      data.setData('text/plain', text)
      console.info(text)
      try {
        navigator.clipboard.writeText(text)
      } catch (e) {
        if (e instanceof TypeError) {
          document.addEventListener('copy', copyHandler)

          if (document.execCommand) document.execCommand('copy')
          else {
            console.info(text)
            this.error = true
          }
        } else throw e
      }

      this.$el.dispatchEvent(copyEvent)
      this.submitBtnText = '已复制到剪切板'
    },
    init() {
      const { watermark } = this.$refs

      watchBox(watermark.$el, record => {
        const { inlineSize: width, blockSize: height } = record[0].contentBoxSize[0]

        this.resetMax({ width, height })
      })
    },
    resetMax({ width, height }) {
      const { ceil, max, cos, sin, PI } = Math,
            { offset, gap, rotate, image, $refs } = this,
            { offset: imageOffset } = image,
            { watermark } = $refs.watermark,
            angle = -rotate.value * PI / 180

      gap.gapMax = max(100, ceil((width * cos(angle) + height * sin(angle)) / 20) * 10)
      offset.xMax = watermark.blockWidth + gap.value
      offset.yMax = max(100, ceil((width * sin(angle) + height * cos(angle)) / 25) * 10)
      offset.yMin = watermark.blockHeight
      imageOffset.xMax = offset.xMax
      imageOffset.yMax = offset.yMax
    },
    watchRotateGapHandler() {
      const { $el: watermark } = this.$refs.watermark

      this.resetMax({ width: watermark.offsetWidth, height: watermark.offsetHeight })
    },
    /**
     * 设置水印
     * @param {WatermarkCfg} data 水印配置
     */
    setData(data) {
      // 与上面 computed watermarkCfg 的过程相反，传入的值 data 是 watermarkCfg 的返回值的格式，需要将其转换为 watermarkCfg 参数的格式
      const {
        content,
        font: { fontSize, fontFamily, fontWeight, fontStyle, color } = {},
        gap,
        image: { alpha, src, offset: [imgX, imgY] = [] } = {},
        lineHeight,
        offset: [x, y] = [],
        rotate,
        zIndex
      } = data,
            { image } = this

      this.content = content

      Object.assign(this.font, {
        color,
        fontFamily,
        fontSize,
        fontStyle,
        fontWeight
      })

      this.gap.value = gap ?? this.gap.value

      image.src = src ?? image.src
      image.offset.x = imgX ?? image.offset.x
      image.offset.y = imgY ?? image.offset.y
      image.alpha.value = alpha ?? image.alpha.value

      this.lineHeight.value = lineHeight ?? this.lineHeight.value

      this.offset.x = x ?? this.offset.x
      this.offset.y = y ?? this.offset.y

      this.rotate.value = rotate ?? this.rotate.value

      this.zIndex = zIndex ?? this.zIndex
    }
  }
}
</script>

<style lang="scss" scoped>
$defaultWidth: 700px;

.watermark-hepler {
  --demo-background-color: hsla(0, 0%, 90%);

  display: inline-block;
  padding: 12px;

  .title {
    text-align: center;
  }

  .watermark-hepler-demo-content {
    width: $defaultWidth - 20px;
    resize: both;
    overflow: auto;
    border-radius: 5px 5px 0 5px;
    padding: 8px;
    background: var(--demo-background-color);
  }

  .dev-tools {
    margin-top: 22px;
    width: $defaultWidth;

    .el-form-item {
      margin-bottom: 10px;

      .row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 6px;

        .col {
          $gap: 12px;
          flex: 1 1 48%;

          &:first-of-type {
            margin-right: calc($gap / 2);
          }

          &:last-of-type {
            margin-left: calc($gap / 2);
          }

          &:first-of-type:last-of-type {
            margin: 0;
          }

          .picker-contanier {
            position: relative;
            height: 32px;
          }
        }

        ::v-deep {
          .el-form-item__label-wrap,
          .el-form-item__label,
          .el-form-item__content {
            line-height: 32px;
            height: 32px;
          }

          .el-form-item__content {
            .el-select-dropdown.el-popper {
              z-index: 9999;
            }
          }
        }
      }

      .slider {
        padding-left: 6px;

        ::v-deep {
          .el-slider__input {
            width: 60px;
          }

          .el-slider__runway.show-input {
            margin-right: 80px;
          }

          .el-slider__runway {
            margin-top: 13px;
            margin-bottom: 13px;
          }
        }
      }
    }
  }

  .actions {
    text-align: center;
  }
}
</style>
