# Vue 👊
## 同时引入两个UI
`cnpm i babel-plugin-component -D`
然后修改.babelrc：
```js
{
  "presets": [["es2015", { "modules": false }]],
  "plugins": [
    ["component",
      [{
        "libraryName": "mint-ui",
        "style": true
      },
        {
          "libraryName": "element-ui",
          "styleLibraryName": "theme-chalk"
        }]
    ]
  ]
}
```
当然这样写还不够，会报错，所以我们还需安装：`cnpm install babel-preset-es2015 --save-dev`

第二种方法
再需安装一个： `npm install babel-plugin-import --save-dev`

```js
{
"presets": [

["env", {
  "modules": false,
  "targets": {
    "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
  }
}],
"stage-2"
],
"plugins": ["transform-vue-jsx", "transform-runtime",

["component", {
  "libraryName": "mint-ui",
  "style":true
}],
["import",
  {
    "libraryName": "element-ui",
    "styleLibraryName": "theme-chalk"
  }
]
]
}
```

```js
import Vue from 'vue'
import App from './App.vue'
import Element from 'element-ui'
import {Button } from 'mint-ui/lib/button';

Vue.component(Button.name, Button);
Vue.use(Element)
``` 