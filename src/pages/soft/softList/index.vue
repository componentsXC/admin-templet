<template>
  <div>
    <el-row class="search_box">
      搜索：
      <el-input v-model="search" placeholder="请输入搜索内容" suffix-icon="el-icon-search" size="small"></el-input>
      <el-button type="primary" size="small" class="addBtn" @click="addSoft">新增</el-button>
    </el-row>
    <el-row>
      <el-table :data="tableData" border style="width: 100%" :row-class-name="tableRowClassName" class="boxShadow">
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="date" label="创建日期" width="180"></el-table-column>
        <el-table-column label="软文链接" width="180">
          <template slot-scope="scope">
            <div>
              <el-button type="text">{{scope.row.link}}</el-button>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="title" label="标题" width="180"></el-table-column>
        <el-table-column prop="readN" label="阅读数量" width="180"></el-table-column>
        <el-table-column fixed="right" label="操作">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
            <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
            <el-button @click="handleClick(scope.row)" type="text" size="small">审核</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
    <el-row>
      <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
    </el-row>
    <el-dialog title="详情" :visible.sync="dialogVisible" width="60%" :before-close="handleClose">
      <MyEcharts
        :id="'exampleId1'"
        :style="{width: '100%', height: '380px'}"
        :option="chartOption1"
      ></MyEcharts>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog title="新增" :visible.sync="addVisible" width="60%" :before-close="handleClose">
      <div>
        <el-card class="box-card">
          <el-row style='padding-left: 20%'>
              软文标题：
              <el-input v-model="softTitle" placeholder="请输入软文标题"  style='width:50%'></el-input>
          </el-row>
          <el-row style='padding-left: 20%'>
              软文链接：
              <el-input v-model="softLink" placeholder="请输入软文链接"  style='width:50%'></el-input>
          </el-row>
        </el-card>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addVisible = false">取 消</el-button>
        <el-button type="primary" @click="addVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import MyEcharts from "@/components/echart.vue"; //echarts
export default {
  data() {
    return {
      search: "",
      dialogVisible: false,
      addVisible: false,
      tableData: [
        {
          date: "2016-05-02",
          link:"www.baidu.com",
          title: "软文标题1",
          readN: "333",
          sharesN: "1"
        },
        {
          date: "2016-05-02",
          link:"www.baidu.com",
          title: "软文标题1",
          readN: "333",
          sharesN: "1"
        },
        {
          date: "2016-05-02",
          link:"www.baidu.com",
          title: "软文标题1",
          readN: "333",
          sharesN: "1"
        },
        {
          date: "2016-05-02",
          link:"www.baidu.com",
          title: "软文标题1",
          readN: "333",
          sharesN: "1"
        }
      ],
      chartOption1: {},
      // 新增软文
      softTitle:'',
      softLink:'',
    };
  },
  components: {
    MyEcharts
  },
  mounted() {
    this.initCharts1();
  },
  methods: {
    handleClick(row) {
      console.log(row);
      this.dialogVisible = true;
    },
    addSoft() {
      let that = this;
      that.addVisible = true;
    },
    handleClose(done) {},
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
    },
    initCharts1() {
      var axisData = [
        "周一",
        "周二",
        "周三",
        "很长很长的周四",
        "周五",
        "周六",
        "周日"
      ];
      var data = axisData.map(function(item, i) {
        return Math.round(Math.random() * 1000 * (i + 1));
      });
      var links = data.map(function(item, i) {
        return {
          source: i,
          target: i + 1
        };
      });
      links.pop();
      this.chartOption1 = {
        title: {
          text: "笛卡尔坐标系上的 Graph"
        },
        tooltip: {},
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: axisData
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            type: "graph",
            layout: "none",
            coordinateSystem: "cartesian2d",
            symbolSize: 40,
            label: {
              normal: {
                show: true
              }
            },
            edgeSymbol: ["circle", "arrow"],
            edgeSymbolSize: [4, 10],
            data: data,
            links: links,
            lineStyle: {
              normal: {
                color: "#2f4554"
              }
            }
          }
        ]
      };
    }
  }
};
</script>
<style>
.el-table .warning-row {
  background: oldlace;
}

.el-table .success-row {
  background: #f0f9eb;
}
</style>

<style lang="scss" scoped>
.search_box {
  & .el-input {
    width: 200px;
  }
}
.el-row {
  padding-bottom: 20px;
}
.addBtn {
  float: right;
}
</style>
