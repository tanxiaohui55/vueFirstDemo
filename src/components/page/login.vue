<template>
  <div class="loginContainer">
    <div class="loginBox">
      <div class="loginBox-title">后台管理系统</div>
      <!-- form -->
      <el-form
        :model="loginForm"
        :rules="loginRule"
        status-icon
        ref="loginForm"
        label-width
        class="demo-ruleForm"
      >
        <el-form-item prop="userName">
          <el-input v-model="loginForm.userName" placeholder="请输入用户名">
            <template slot="prepend">
              <i class="el-icon-remove-outline"></i>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password" class="clear">
          <el-input
            type="password"
            v-model="loginForm.password"
            placeholder="请输入密码"
            auto-complete="off"
          >
            <template slot="prepend">
              <i class="el-icon-circle-check"></i>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item class="clear">
          <el-checkbox v-model="checked" style="color:#ccc" right>记住密码</el-checkbox>
          <!-- <a href="javascrpt;">忘记密码</a> -->
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="submit" @click="login('loginForm')">登录</el-button>
        </el-form-item>
      </el-form>
      <!-- endForm -->
    </div>
  </div>
</template>
<script>
import { error } from "util";
export default {
  name: "Login",
  data() {
    // 自定义校验器
    var checkPass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("密码不能为空"));
      } else {
        if (
          new RegExp("^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]{6,16}$").test(value)
        ) {
          callback();
        } else {
          callback(new Error("密码是6~16位，必须包含字母、数字"));
        }
      }
    };

    return {
      checked: false,
      loginForm: {
        userName: "",
        password: ""
      },
      loginRule: {
        userName: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
          { min: 3, max: 10, message: "长度必须是3~10之间", trigger: "blur" }
        ],
        password: [
          { validator: checkPass, trigger: "blur" }
          //{ required: true, message: "密码不能为空", trigger: "blur" },
          // {
          //   type: "string",
          //   pattern: "^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]{6,16}$",
          //   message: "密码是6~16位，必须包含字母、数字",
          //   trigger: "blur"
          // }
        ]
      }
    };
  },
  methods: {
    login: function(loginForm) {
      this.$refs[loginForm].validate(valid => {
        if (valid) {
          //alert("通过校验");
          localStorage.setItem("_username", this.loginForm.userName);
          this.$router.push("/");
        } else {
          alert("不通过校验");
          return false;
        }
      });
    },
    resetForm() {
      //重置输入内容
      this.$refs[loginForm].resetFields();
    }
  },
  created() {
    if (localStorage.getItem("_username")) {
      //登陆了自动跳到首页，来阻止重复登陆
      this.$router.push("/");
    }
  }
};
</script>
<style scoped>
.loginContainer {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url("../../assets/bj.jpg");
}

.loginBox-title {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 16px;
  color: #fff;
  border-radius: 5px 5px 0 0;
  background: rgb(124, 130, 136);
}
.loginBox {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 330px;
  margin: -200px 0 0 -175px;
  /* border: 1px solid #ccc; */
  border-radius: 5px;
  color: white !important;
  background: rgba(220, 220, 220, 0.3);
}
.demo-ruleForm {
  padding: 30px 30px 40px !important;
}
.clear {
  margin: 0;
}
.submit {
  width: 100% !important;
}
</style>
