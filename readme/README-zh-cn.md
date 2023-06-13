# watermark/watermark-hepler —— 水印开发帮助插件

简体中文 | [English](../README.md)

## 描述

配置 watermark 插件的一个 GUI 。支持 原生 web Component 和 vue2 组件。

## 开始使用

安装依赖包

```bash
npm i @cailiao/watermark-hepler
```

## 使用

使用 web Component

```javascript
import '@cailiao/watermark-hepler'
```

引入后可直接全局使用 \<watermark-hepler\> 标签

```html
<div>
  <watermark-hepler />
</div>
```

亦或是使用 vue2 组件

```javascript
import '@cailiao/watermark-hepler/vue2-component/style'
import Component from '@cailiao/watermark-hepler/vue2-component'
// 如果工程化软件不支持 package.json 中的 exports 字段，也可以直接导入文件
import '@cailiao/watermark-hepler/lib/ui/dist/Component/style.css'
import Component from '@cailiao/watermark-hepler/lib/ui/dist/Component/watermarkHeplerUI.esm.browser.min.js'

Vue.component('WatermarkHepler', Component)
```
