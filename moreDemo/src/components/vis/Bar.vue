<template>
  <div id="bar"></div>
</template>

<script>
import * as echarts from 'echarts/core'

import { onMounted } from 'vue'
export default {
  name: 'Quarter',
  props: {
    calendar: Object,
  },

  setup() {
    const showQuarter = false
    return { showQuarter, onMounted }
  },
  mounted() {
    this.createEcharts()
  },
  methods: {
    createEcharts() {
      const myChart = echarts.init(document.getElementById('bar'))
      myChart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
        },
        grid: {
          top: '30%',
          left: '15%',
          right: '15%',
        },
        legend: [
          {
            top: '5%',
            x: 'right',
            data: ['补贴金'],
          },
          {
            top: '12%',
            x: 'right',
            itemWidth: 16,
            data: ['100岁以上', '90～99岁', '80～89岁'],
          },
        ],
        xAxis: {
          type: 'category',
          data: [
            '和平社区',
            '三瓦窑社区',
            '永安社区',
            '益州社区',
            '交子公园社区',
            '月牙湖社区',
          ],
          axisLabel: {
            rotate: 45,
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '##E9EAEB',
            },
          },
        },
        yAxis: [
          {
            type: 'value',
            name: '人',
            axisLine: {
              show: true,
              lineStyle: {
                color: '#E9EAEB',
              },
            },
            axisTick: {
              show: true,
            },
            splitLine: {
              show: false,
            },
            axisLabel: {
              color: '#828282',
              fontSize: 12,
            },
          },
          {
            type: 'value',
            name: '万',
            axisLine: {
              show: true,
              lineStyle: {
                color: '#E9EAEB',
              },
            },
            axisTick: {
              show: true,
            },
            splitLine: {
              show: false,
            },
            axisLabel: {
              color: '#828282',
              fontSize: 12,
            },
          },
        ],
        series: [
          {
            name: '补贴金',
            type: 'line',
            yAxisIndex: 1,
            color: '#EF8052',
            data: [1210, 1523, 1923, 1123, 1244, 5145],
          },
          {
            name: '100岁以上',
            type: 'bar',
            stack: '年龄',
            barWidth: '50%',
            color: '#485AE9',
            data: [3210, 3132, 1301, 3314, 1910, 3310],
          },
          {
            name: '90～99岁',
            type: 'bar',
            stack: '年龄',
            barWidth: '50%',
            color: '#EE5B56',
            data: [1120, 1132, 101, 1314, 910, 230],
          },
          {
            name: '80～89岁',
            type: 'bar',
            stack: '年龄',
            barWidth: '50%',
            color: '#F4AC56',
            data: [2210, 1821, 191, 234, 2190, 330],
          },
        ],
      })
    },
  },
}
</script>

<style lang="scss">
#bar {
  width: 100%;
  height: 400px;
}
</style>
