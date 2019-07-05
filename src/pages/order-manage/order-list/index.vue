<template>
  <div>
    <el-row class="search_box">
      搜索：
      <el-input v-model="search" placeholder="请输入搜索内容" suffix-icon="el-icon-search" size="small"></el-input>
    </el-row>
    <el-row>
      <el-table :data="tableData" border style="width: 100%" class="boxShadow">
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="date" label="日期" width="150"></el-table-column>
        <el-table-column prop="name" label="姓名" width="120"></el-table-column>
        <el-table-column prop="address" label="地址" width="300"></el-table-column>
        <el-table-column prop="province" label="单位" width="120"></el-table-column>
        <el-table-column prop="city" label="职位" width="120"></el-table-column>
        <el-table-column prop="zip" label="电话" width="120"></el-table-column>
        <el-table-column fixed="right" label="操作" min-width="170">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button @click="historyClick(scope.row)" type="text" size="small">历史记录</el-button>
            <el-button @click="mapClick(scope.row)" type="text" size="small">地理分布</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
    <el-row>
      <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
    </el-row>
    <!-- 基本信息弹出层 -->
    <el-dialog
      title="基本信息"
      :visible.sync="dialogVisible"
      width="60%"
      :before-close="function(done){done()}"
    >
      <!-- 基本信息 -->
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>
            <strong>会员基本信息</strong>
          </span>
        </div>
        <el-row>
          <el-col>
            <img
              style="width: 100px"
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              alt
            />
            <div>微信名称</div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">登记日期：2019-07-07</el-col>
          <el-col :span="8">姓名：战三</el-col>
          <el-col :span="8">地址：成都</el-col>
        </el-row>
        <el-row>
          <el-col :span="8">单位：市一医院</el-col>
          <el-col :span="8">职位：医生</el-col>
          <el-col :span="8">电话：123123123</el-col>
        </el-row>
      </el-card>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 历史记录弹出层 -->
    <el-dialog
      title="历史记录"
      :visible.sync="historyVisible"
      width="60%"
      :before-close="function(done){done()}"
      :fullscreen="true"
    >
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>
            <strong>历史记录列表</strong>
          </span>
        </div>
        <div>
          <el-table :data="historyData" style="width: 100%;" height="550px">
            <el-table-column type="index"></el-table-column>
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="contentTitle" label="浏览内容标题" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="link" label="链接" width="180" :show-overflow-tooltip="true">
              <template slot-scope="scope">
                <div>
                  <el-button type="text" size="small">{{scope.row.link}}</el-button>
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="address" label="实时地点" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="startTime" label="浏览开始时间" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="endTime" label="浏览结束时间" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column label="浏览时间" width="180">
              <template slot-scope="scope">
                <div>{{scope.row.time}}小时</div>
              </template>
            </el-table-column>
          </el-table>
          <el-row>
            <el-pagination
              background
              layout="prev, pager, next"
              :total="1000"
              style="padding:20px 0 0 0;"
            ></el-pagination>
          </el-row>
        </div>
      </el-card>
      <span slot="footer" class="dialog-footer">
        <el-button @click="historyVisible = false">取 消</el-button>
        <el-button type="primary" @click="historyVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 地理分布弹出层 -->
    <el-dialog
      title="地理分布"
      :visible.sync="mapVisible"
      width="60%"
      :before-close="function(done){done()}"
      :fullscreen="true"
    >
      <el-card class="box-card">
        <div slot="header" class="clearfix">
          <span>
            <strong>会员地理分布图</strong>
          </span>
        </div>
        <MyEcharts
          :id="'exampleId2'"
          :style="{width: '100%', height: '600px'}"
          :option="chartOption1"
        ></MyEcharts>
      </el-card>
      <span slot="footer" class="dialog-footer">
        <el-button @click="mapVisible = false">取 消</el-button>
        <el-button type="primary" @click="mapVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import http from "@/config/httpConfig.js";
import MyEcharts from "@/components/echart.vue"; //echarts
export default {
  data() {
    return {
      search: "",
      dialogVisible: false,
      historyVisible: false,
      mapVisible: false,
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333
        }
      ],
      // 历史记录
      historyData: [
        {
          date: "2019-9-9",
          contentTitle: "这是一个标题很长很长",
          link: "www.baidu.com",
          address: "成都市一医院",
          startTime: "2019-9-9 09:09:09",
          endTime: "2019-9-9 09:09:09",
          time: "0.5"
        }
      ],
      chartOption1: {}
    };
  },
  components: {
    MyEcharts
  },
  created() {
    let that = this;
  },
  mounted() {
    let that = this;

    that.initCharts1();
  },
  methods: {
    handleClick(row) {
      console.log(row);
      this.dialogVisible = true;
    },
    historyClick(row) {
      console.log(row);
      this.historyVisible = true;
    },
    mapClick(row) {
      console.log(row);
      this.mapVisible = true;
    },

    handleClose(done) {},
    initCharts1() {
      var geoCoordMap = {
        衢州: [118.88, 28.97],
        廊坊: [116.7, 39.53],
        菏泽: [115.480656, 35.23375],
        合肥: [117.27, 31.86],
        武汉: [114.31, 30.52],
        大庆: [125.03, 46.58]
      };

      var convertData = function(data) {
        var res = [];
        for (var i = 0; i < data.length; i++) {
          var geoCoord = geoCoordMap[data[i].name];
          if (geoCoord) {
            res.push(geoCoord.concat(data[i].value));
          }
        }
        return res;
      };

      this.chartOption1 = {
        backgroundColor: "#404a59",
        title: {
          text: "地理分布图",
          left: "center",
          textStyle: {
            color: "#fff"
          }
        },
        tooltip: {
          trigger: "item"
        },
        legend: {
          orient: "vertical",
          top: "bottom",
          left: "right",
          data: ["阅读时长"],
          textStyle: {
            color: "#fff"
          }
        },
        visualMap: {
          min: 0,
          max: 300,
          splitNumber: 5,
          color: ["#d94e5d", "#eac736", "#50a3ba"],
          textStyle: {
            color: "#fff"
          }
        },
        geo: {
          map: "china",
          label: {
            emphasis: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              areaColor: "#323c48",
              borderColor: "#111"
            },
            emphasis: {
              areaColor: "#2a333d"
            }
          }
        },
        series: [
          {
            name: "阅读时长",
            type: "scatter",
            coordinateSystem: "geo",
            data: convertData([
              { name: "衢州", value: 177 },
              { name: "廊坊", value: 193 },
              { name: "菏泽", value: 194 },
              { name: "合肥", value: 229 },
              { name: "武汉", value: 273 },
              { name: "大庆", value: 279 }
            ]),
            symbolSize: 12,
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false
              }
            },
            itemStyle: {
              emphasis: {
                borderColor: "#fff",
                borderWidth: 1
              }
            }
          }
        ]
      };
    }
  }
};
</script>
<style lang="scss" scoped>
.search_box {
  & .el-input {
    width: 200px;
  }
}
.el-row {
  padding-bottom: 20px;
}
.box-card {
  & {
    margin-bottom: 20px;
  }
}
</style>
