<template>
  <div>
    <MyEcharts :id="'exampleId1'" :style="{width: '100%', height: '380px'}" :option="chartOption1"></MyEcharts>
    <MyEcharts :id="'exampleId2'" :style="{width: '100%', height: '380px'}" :option="chartOption2"></MyEcharts>
  </div>
</template>

<script>
import MyEcharts from "@/components/echart.vue"; //echarts
export default {
  data() {
    return {
      chartOption1: {},
      chartOption2: {},
      echartsXYcolor: "#fff000",
      lineColor: "#5bb1f0"
    };
  },
  components: {
    MyEcharts
  },
  mounted() {
    let that = this;
    that.initCharts1();
    that.initCharts2();
  },
  methods: {
    //list1
    initCharts1() {
      this.chartOption1 = {
        title: {
          text: "折线图"
        },
        tooltip: {
          trigger: "axis",
          confine: true, //是否将 tooltip 框限制在图表的区域内。  true为是
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "line" // 默认为直线，可选为：'line' | 'shadow'
          },
          formatter: function(params) {
            return params;
          }
        },
        legend: {
          data: [],
          top: "93%",
          right: "center",
          bottom: "center",
          left: "center",
          textStyle: {
            color: this.echartsXYcolor
          }
        },
        // toolbox: {
        //   feature: {
        //     saveAsImage: {}
        //   }
        // },
        grid: {
          top: "3%",
          left: "100px",
          right: "100px",
          bottom: "100px"
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
          axisLine: {
            lineStyle: {
              color: this.echartsXYcolor
            }
          },
          axisLabel: {
            textStyle: {
              color: this.echartsXYcolor
            }
          }
        },
        dataZoom: [
          {
            type: "inside"
          },
          {
            type: "slider",
            top: "82%",
            textStyle: {
              color: this.echartsXYcolor
            }
          }
        ],
        yAxis: {
          axisLine: {
            lineStyle: {
              color: this.echartsXYcolor
            }
          },
          axisLabel: {
            textStyle: {
              color: this.echartsXYcolor
            },
            formatter: function(val) {
              return (val * 1).toFixed(2) + "%";
            }
          }
        },
        series: [
          {
            name: "邮件营销",
            type: "line",
            lineStyle: {
              color: this.lineColor // 线的颜色
            },
            itemStyle: {
              color: this.lineColor // 图例的颜色
            },
            showSymbol: false, // 不显示symbol
            data: [120, 132, 101, 134, 90, 230, 210]
          }
        ]
      };
    },
    // list2
    initCharts2() {
      this.chartOption2 = {
   

    title: {
        text: '天气情况统计',
        subtext: '虚构数据',
        left: 'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        // orient: 'vertical',
        // top: 'middle',
        bottom: 10,
        left: 'center',
        data: ['西凉', '益州','兖州','荆州','幽州']
    },
    series : [
        {
            type: 'pie',
            radius : '65%',
            center: ['50%', '50%'],
            selectedMode: 'single',
            data:[
                {
                    value:1548,
                    name: '幽州',
                    label: {
                        normal: {
                            formatter: [
                                '{title|{b}}{abg|}',
                                '  {weatherHead|天气}{valueHead|天数}{rateHead|占比}',
                                '{hr|}',
                                '  {Sunny|}{value|202}{rate|55.3%}',
                                '  {Cloudy|}{value|142}{rate|38.9%}',
                                '  {Showers|}{value|21}{rate|5.8%}'
                            ].join('\n'),
                            backgroundColor: '#eee',
                            borderColor: '#777',
                            borderWidth: 1,
                            borderRadius: 4,
                            rich: {
                                title: {
                                    color: '#eee',
                                    align: 'center'
                                },
                                abg: {
                                    backgroundColor: '#333',
                                    width: '100%',
                                    align: 'right',
                                    height: 25,
                                    borderRadius: [4, 4, 0, 0]
                                },
                                Sunny: {
                                    height: 30,
                                    align: 'left',
                      
                                },
                                Cloudy: {
                                    height: 30,
                                    align: 'left',
                          
                                },
                                Showers: {
                                    height: 30,
                            
                                },
                                weatherHead: {
                                    color: '#333',
                                    height: 24,
                                    align: 'left'
                                },
                                hr: {
                                    borderColor: '#777',
                                    width: '100%',
                                    borderWidth: 0.5,
                                    height: 0
                                },
                                value: {
                                    width: 20,
                                    padding: [0, 20, 0, 30],
                                    align: 'left'
                                },
                                valueHead: {
                                    color: '#333',
                                    width: 20,
                                    padding: [0, 20, 0, 30],
                                    align: 'center'
                                },
                                rate: {
                                    width: 40,
                                    align: 'right',
                                    padding: [0, 10, 0, 0]
                                },
                                rateHead: {
                                    color: '#333',
                                    width: 40,
                                    align: 'center',
                                    padding: [0, 10, 0, 0]
                                }
                            }
                        }
                    }
                },
                {value:535, name: '荆州'},
                {value:510, name: '兖州'},
                {value:634, name: '益州'},
                {value:735, name: '西凉'}
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};
    }
  }
};
</script>
