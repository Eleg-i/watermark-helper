import Component from '@cailiao/watermark-hepler-ui'
import Vue from 'vue'
import styleText from '@cailiao/watermark-hepler-ui/dist/style.css'
import wrap from '@vue/web-component-wrapper'

const InnerWatermarkHepler = wrap(Vue, Component) as unknown as typeof HTMLDivElement & { shadowRoot: Element }

/**
 * 水印组件
 */
class WatermarkHepler extends InnerWatermarkHepler {
  /**
   * 构造函数
   */
  constructor() {
    super()
    const styleSheet = document.createElement('style')

    styleSheet.innerText = ':host { display: block; }' + styleText
    this.shadowRoot.appendChild(styleSheet)
  }
}

window.customElements.define('watermark-hepler', WatermarkHepler)
