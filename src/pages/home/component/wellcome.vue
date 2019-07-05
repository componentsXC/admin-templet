<template>
  <div>
    <p class="title" @click="$router.push({ name: 'home'})">欢迎登陆佳颖医用制品有限公司——微信公众号后台统计系统</p>

    <el-card class="box-card">
      <MyEcharts
        :id="'exampleId0'"
        :style="{width: '100%', height: '400px'}"
        :option="chartOption0"
      ></MyEcharts>
    </el-card>
  </div>
</template>
<script>
import MyEcharts from "@/components/echart.vue"; //echarts
export default {
  data() {
    return {
      chartOption0: {}
    };
  },
  components: {
    MyEcharts
  },
  mounted() {
    let that = this;

    that.initCharts0();
  },
  methods: {
    initCharts0() {
      this.chartOption0 = {
        legend: {},
        tooltip: {
          trigger: "axis",
          showContent: false
        },
        dataset: {
          source: [
            ["时间", "2012", "2013", "2014", "2015", "2016", "2017"],
            ["时间1", 41.1, 30.4, 65.1, 53.3, 83.8, 98.7],
            ["访问量", 86.5, 92.1, 85.7, 83.1, 73.4, 55.1],
            ["活动", 24.1, 67.2, 79.5, 86.4, 65.2, 82.5],
            ["活动1", 55.2, 67.1, 69.2, 72.4, 53.9, 39.1]
          ]
        },
        xAxis: { type: "category" },
        yAxis: { gridIndex: 0 },
        grid: { top: "55%" },
        series: [
          { type: "line", smooth: true, seriesLayoutBy: "row" },
          { type: "line", smooth: true, seriesLayoutBy: "row" },
          { type: "line", smooth: true, seriesLayoutBy: "row" },
          { type: "line", smooth: true, seriesLayoutBy: "row" },
          {
            type: "pie",
            id: "pie",
            radius: "30%",
            center: ["50%", "25%"],
            label: {
              formatter: "{b}: {@2012} ({d}%)"
            },
            encode: {
              itemName: "product",
              value: "2012",
              tooltip: "2012"
            }
          }
        ]
      };
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/styles/_mixin.scss";
.title {
  & {
    @include flex-center();
    font-size: 25px;
    padding: 100px 0 100px 0;
  }
}
</style>
