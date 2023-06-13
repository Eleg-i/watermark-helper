# watermark/watermark-helper

[简体中文](readme/README-zh-cn.md) | English

## Description

A GUI for configuring the watermark plugin. Supports native web components and Vue2 components.

## Getting Started

Install the dependency package:

```bash
npm i @cailiao/watermark-helper
```

## Usage

Use web Component

```javascript
import '@cailiao/watermark-helper'
```

After importing, you can directly use the `<watermark-helper>` tag globally.

```html
<div>
  <watermark-helper />
</div>
```

Alternatively, you can use the Vue 2 component.

```javascript
import Component from '@cailiao/watermark-helper/vue2-component'
// If your build tool does not support the `exports` field in package.json, you can also directly import the file.
import Component from '@cailiao/watermark-helper/lib/ui/dist/Component/watermarkHelperUI.esm.browser.min.js'

Vue.component('WatermarkHelper', Component)
```
