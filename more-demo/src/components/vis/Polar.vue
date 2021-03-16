<template>
  <!-- 半圆 -->
  <div id="polar"></div>
</template>
<script>
import * as echarts from "echarts/core"
export default {
  name: "Quarter",
  props: {
    calendar: Object
  },
  mounted() {
    this.createEcharts()
  },
  methods: {
    createEcharts() {
      const myChart = echarts.init(document.getElementById("polar"))
      myChart.setOption({
        angleAxis: {
          axisLine: {
            show: false
          },
          axisLabel: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          min: 0,
          max: 200,
          boundaryGap: ["0", "100"],
          startAngle: 180
        },
        radiusAxis: {
          type: "category",
          axisLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          }
        },
        polar: {},
        series: [
          {
            type: "bar",
            stack: "总数",
            name: "社会保险企业办事",
            data: [null, null, null, 20],
            coordinateSystem: "polar",
            value: 41969,
            color: "#70D49A"
          },
          {
            type: "bar",
            stack: "总数",
            name: "社会保险个人办事",
            data: [null, null, null, 10],
            coordinateSystem: "polar",
            value: 6151,
            color: "#316CC4"
          },
          {
            type: "bar",
            stack: "总数",
            name: "劳动关系",
            data: [null, null, null, 10],
            coordinateSystem: "polar",
            value: 2753,
            color: "#485AE9"
          },
          {
            type: "bar",
            stack: "总数",
            name: "城管服务",
            data: [null, null, null, 10],
            coordinateSystem: "polar",
            value: 819,
            color: "#F45B80"
          },
          {
            type: "bar",
            stack: "总数",
            name: "工会服务",
            data: [null, null, null, 10],
            coordinateSystem: "polar",
            value: 482,
            color: "#FFA8A7"
          },
          {
            type: "bar",
            stack: "总数",
            name: "食品经营许可",
            data: [null, null, null, 10],
            coordinateSystem: "polar",
            value: 365,
            color: "#1B3478"
          },
          {
            type: "bar",
            stack: "总数",
            name: "就业服务",
            data: [null, null, null, 10],
            coordinateSystem: "polar",
            value: 250,
            color: "#3677FF"
          },
          {
            type: "bar",
            stack: "总数",
            name: "EMS邮寄",
            data: [null, null, null, 10],
            coordinateSystem: "polar",
            value: 25,
            color: "#FEB446"
          },
          {
            type: "bar",
            stack: "总数",
            name: "团组织服务",
            data: [null, null, null, 10],
            coordinateSystem: "polar",
            value: 16,
            color: "#64C0DE"
          }
        ],
        tooltip: {
          show: true,
          trigger: "item",
          borderColor: "#fff"
        },
        grid: {
          left: 0,
          top: 0,
          bottom: 0,
          right: 0
        }
      })
    }
  }
}
</script>
<style lang="scss">
#polar {
  width: 100%;
  height: 260px;

  .tooltip {
    text-align: left;
  }
}
</style>
