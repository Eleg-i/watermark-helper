# watermark/watermark-hepler

简体中文 | [English](readme/README-zh-cn.md)

## Description

A GUI for configuring the watermark plugin. Supports native web components and Vue2 components.

## Getting Started

Install the dependency package:

```bash
npm i @cailiao/watermark-hepler
```

## Usage

Use web Component

```javascript
import '@cailiao/watermark-hepler'
```

After importing, you can directly use the `<watermark-hepler>` tag globally.

```html
<div>
  <watermark-hepler />
</div>
```

Alternatively, you can use the Vue 2 component.

```javascript
import Component from '@cailiao/watermark-hepler/vue2-component'
// If your build tool does not support the `exports` field in package.json, you can also directly import the file.
import Component from '@cailiao/watermark-hepler/lib/ui/dist/Component/watermarkHeplerUI.esm.browser.min.js'

Vue.component('WatermarkHepler', Component)
```
