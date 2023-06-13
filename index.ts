import Component from '@cailiao/watermark-helper-ui'
import Vue from 'vue'
import styleText from '@cailiao/watermark-helper-ui/dist/style.css'
import wrap from '@vue/web-component-wrapper'

const InnerWatermarkHelper = wrap(Vue, Component) as unknown as typeof HTMLDivElement & { shadowRoot: Element }

/**
 * 水印组件
 */
class WatermarkHelper extends InnerWatermarkHelper {
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

window.customElements.define('watermark-helper', WatermarkHelper)
