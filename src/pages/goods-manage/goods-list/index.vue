<template>
  <div>
    <el-row class="search_box">
      搜索：
      <el-input v-model="search" placeholder="请输入搜索内容" suffix-icon="el-icon-search" size="small"></el-input>
    </el-row>
    <el-row>
      <el-table :data="tableData" border style="width: 100%" :row-class-name="tableRowClassName" class="boxShadow">
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="date" label="日期" width="180"></el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column label="二维码信息" width="180">
          <template slot-scope="scope">
            <el-button @click="codeClick(scope.row)" type="text" size="small">详情</el-button>
          </template>
        </el-table-column>
        <el-table-column prop="sharesN" label="分享次数" width="180"></el-table-column>
        <el-table-column prop="followN" label="关注人员" width="180"></el-table-column>
        <el-table-column fixed="right" label="操作">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
    <el-row>
      <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
    </el-row>
    <el-dialog title="详情" :visible.sync="dialogVisible" width="60%" :before-close="handleClose">
      <span>会员详情</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>
    <el-dialog title="二维码详情" :visible.sync="codeVisible" width="60%" :before-close="handleClose">
      <div class="codeBox">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>二维码生成：</span>
          </div>
          <div>
            <div class="ercode" :style="{backgroundImage: 'url(' + ercodeimg + ')'}"></div>
          </div>
        </el-card>
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>二维码相关信息：</span>
          </div>
          <div>
            
          </div>
        </el-card>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="codeVisible = false">取 消</el-button>
        <el-button type="primary" @click="codeVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      dialogVisible: false,
      codeVisible: false,
      ercodeimg: require("@/assets/image/erCode.jpg"),
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          code: "上海",
          sharesN: "1",
          followN: "4"
        },
        {
          date: "2016-05-02",
          name: "张三",
          code: "上海",
          sharesN: "1",
          followN: "4"
        },
        {
          date: "2016-05-02",
          name: "李四",
          code: "上海",
          sharesN: "1",
          followN: "4"
        },
        {
          date: "2016-05-02",
          name: "共拍了",
          code: "上海",
          sharesN: "1",
          followN: "4"
        },
        {
          date: "2016-05-02",
          name: "小小",
          code: "上海",
          sharesN: "1",
          followN: "4"
        }
      ]
    };
  },
  methods: {
    handleClick(row) {
      console.log(row);
      this.dialogVisible = true;
    },
    codeClick(row) {
      this.codeVisible = true;
    },
    handleClose(done) {},
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return "warning-row";
      } else if (rowIndex === 3) {
        return "success-row";
      }
      return "";
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
.ercode {
  width: 200px;
  height: 200px;
  background-size: 100% 100%;
  margin: auto;
}
.codeBox {
  & {
    max-height: 300px;
    overflow: hidden;
    overflow-y: scroll;
        padding-right: 20px;
  }
  & .box-card {
    margin-bottom: 20px;
  }
}
</style>
