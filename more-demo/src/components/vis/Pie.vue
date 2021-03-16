<template>
  <div id="pie"></div>
</template>
<script>
export default {
  props: {
    pieData: Array
  },
  data() {
    return {
      myChart: {}
    }
  },
  mounted() {
        this.createEcharts()
  },
  methods: {
    createEcharts() {
      this.myChart = this.echarts.init(document.getElementById("pie"))
      this.myChart.setOption({
        title: {
          show: true,
          text: this.pieData[0],
          top: "center",
          left: "center",
          textStyle: {
            fontSize: 24,
            fontWeight: "bold"
          },
          subtext: "办件量",
          subtextStyle: {
            color: "#828282",
            fontSize: 12
          },
          itemGap: 4
        },
        series: [
          {
            name: "办件量",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 4,
              borderColor: "#fff",
              borderWidth: 1,
            },
            label: {
              show: false,
              position: "center"
            },
            labelLine: {
              show: false
            },
            emphasis: {
              scale: false
            },
            data: [
              { value: this.pieData[1], name: "处理中" },
              { value: this.pieData[2], name: "已完成" },
              { value: this.pieData[3], name: "已退回" }
            ]
          }
        ]
      })
    }
  }
}
</script>
<style lang="scss" scoped>
#pie {
  width: 200px;
  height: 200px;
}
</style>
