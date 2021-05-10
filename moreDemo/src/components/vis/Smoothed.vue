<template>
  <div id="smoothed"></div>
</template>
<script>
import * as echarts from "echarts/core"
export default {
  name: "Quarter",
  mounted() {
    this.createEcharts()
  },
  methods: {
    createEcharts() {
      const myChart = echarts.init(document.getElementById("smoothed"))
      myChart.setOption({
        title: {
          show: true,
          text: "办件量",
          left: 10
        },
        grid: {
          left: 60
        },
        legend: {
          name: [1],
          right: 16,
          top: 20,
          textStyle: {
            color: "#828282"
          }
        },
        xAxis: {
          type: "category",
          axisLabel: {
            rotate: 45,
            color: "#828282",
            fontSize: 9,
            overflow: "break",
            lineOverflow: "break"
          },
          axisLine: {
            lineStyle: {
              color: "#E9EAEB"
            }
          },
          data: [
            "食品经营许可",
            "就业服务",
            "民政服务",
            "工会服务",
            "社会保险企业办事",
            "法律援助",
            "EMS邮寄",
            "社会保险个人办事",
            "城管服务",
            "劳动关系",
            "团组织服务"
          ]
        },
        yAxis: {
          type: "value",
          axisLabel: {
            color: "#828282"
          },
          splitLine: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: "#E9EAEB"
            },
            show: true,
            onZeros: true,
            onZeroAxisIndex: true
          },
          axisTick: {
            show: true,
            alignWithLabel: false
          }
        },
        series: [
          {
            name: "办件量",
            data: [8, 44, 21, 50, 81, 20, 10, 80, 110, 90, 120],
            type: "line",
            smooth: true,
            color: "#485AE9",
            areaStyle: {
              shadowColor: "#fff",
              shadowBlur: 20
            },
            symbolSize: 8,
            legendHoverLink: true,
            cursor: "pointer"
          }
        ],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            lineStyle: {
              width: 2,
              color: "#485AE9"
            }
          }
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
#smoothed {
  width: 92%;
  width: 100%;
  height: 300px;
  z-index: 2;
  background: #ffffff;
  border-radius: 16px;
  padding-top: 30px;
}
</style>
