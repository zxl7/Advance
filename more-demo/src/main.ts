import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import '@/assets/css/style.scss'

// 引入 echarts 核心模块，核心模块提供了 echarts 使用必须要的接口。
// 引入柱状图图表，图表后缀都为 Chart
// 引入提示框，标题，直角坐标系组件，组件后缀都为 Component
// 引入 Canvas 渲染器，注意引入 CanvasRenderer 或者 SVGRenderer 是必须的一步
import * as echarts from 'echarts/core'
import { LineChart, BarChart, PieChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  PolarComponent,
  LegendComponent,
} from 'echarts/components'
import { CanvasRenderer } from 'echarts/renderers'

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  LineChart,
  BarChart,
  PieChart,
  PolarComponent,
  LegendComponent,
  CanvasRenderer,
])


createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
