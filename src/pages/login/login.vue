<template>
  <div class="register">
    <section class="form_container">
      <div class="manage_tip">
        <span class="title">后台管理系统</span>
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="100px" 
          class="demo-ruleForm"
        >
          <el-form-item label="用户名" prop="name" >
            <el-input type="text" v-model="ruleForm.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')" native-type="submit">提交</el-button>
          </el-form-item>
        </el-form>
      </div>
    </section>
    <div class="filter" :style="{backgroundImage: 'url(' + bgImg + ')'}"></div>
  </div>
</template>
<script>
import { login } from "@/api/permission.js";
export default {
  data() {
    var nameRules = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      }
      callback();
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    return {
      bgImg:require('@/assets/image/filter_BG.jpg'),
      ruleForm: {
        pass: "",
        checkPass: "",
        name: ""
      },
      rules: {
        name: [{ validator: nameRules, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          login().then(data => {
            let token = data.token;
            this.$store.commit("LOGIN_IN", token);
            this.$router.push("home");
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
@import '@/styles/_mixin.scss';
.form_container {
  & {
    width: 500px;
    height: auto;
    margin: auto;
    // @include flex-center();
    padding: 200px 0 0 0;
  }
  & .title {
    text-align: center;
    width: 100%;
    display: block;
    padding-bottom: 20px;
     color: #ffffff;
  }
}
.filter {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  // background: url("~/src/assets/image/filter_BG.jpg") no-repeat fixed;
  background-size: 100% 100%;
  -webkit-filter: blur(70px);
  z-index: -1;
}
</style>
<style lang="scss">
.el-form-item__label{
  color: #ffffff;
}
</style>
