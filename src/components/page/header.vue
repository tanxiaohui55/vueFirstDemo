<template>
  <div class="container">
    <div class="left">
      <i class="el-icon-menu" @click="toggleMenu"></i>
      &nbsp;&nbsp;&nbsp;
      <span class="logo">后台管理系统</span>
    </div>
    <div class="right">
      <div class="messag">
        <el-tooltip content="您有2条消息" placement="bottom">
          <i class="el-icon-location-outline"></i>
        </el-tooltip>
        <span class="btn-bell-badge" v-if="true"></span>
      </div>

      <div class="messag" v-if="msgCount > 0">
        <el-badge is-dot class="item">
          <el-tooltip
            :content="'您有' + msgCount + '条消息'"
            placement="bottom"
          >
            <router-link to="/index/tabs">
              <i class="el-icon-bell"></i>
            </router-link>
          </el-tooltip>
        </el-badge>
      </div>
      <div class="messag" v-else>
        <el-tooltip content="您没有消息" placement="bottom">
          <router-link to="/index/tabs">
            <i class="el-icon-bell"></i>
          </router-link>
        </el-tooltip>
      </div>
      <div class="headPhoto">
        <img src="../../assets/header.jpeg" alt />
      </div>

      <div class="dropMenu">
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            {{ userName }}
            <i class="el-icon-arrow-down el-icon-caret-bottom"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="about">关于我</el-dropdown-item>
            <el-dropdown-item command="toggle">切换用户</el-dropdown-item>
            <el-dropdown-item command="cancel"> 退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script>
import Bus from "../../utils/bus";
import { mapState, mapActions } from "vuex";
export default {
  name: "Header",
  data() {
    return {
      userName: "",
      msgCount: 0
    };
  },
  computed: {
    ...mapState(["isCollapse"])
  },
  methods: {
    ...mapActions(["toggleMenu"]),
    handleCommand(command) {
      if (command == "about") {
        this.$message("click on item " + command);
      } else if (command == "toggle") {
        localStorage.clear();
        this.$router.push("/login");
      } else {
        this.$message("click on item " + command);
      }
    },

    getMsgCount() {
      this.msgCount = this.$store.state.messgeData.length;
    }
  },
  created() {
    this.userName = localStorage.getItem("_username");
    this.getMsgCount();
  }
};
</script>
<style scoped>
/* 红色小圆点定位 */
.item {
  margin-top: 10px;
  margin-right: 40px;
}
.container {
  position: relative;
  width: 100%;
  height: 60px;
  /* line-height: 60px; */
  color: white;
  background: rgb(95, 94, 94);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px 0 25px;
  box-sizing: border-box;
}
img {
  display: block;
  height: 45px;
  width: 45px;
  border-radius: 50%;
  /* padding: 3px; */
  margin: 0 5px;
}
.container .right {
  display: flex;
  align-items: center;
}
.container .right div {
  margin: 0 5px;
}

.el-dropdown-link,
a.el-tooltip {
  cursor: pointer;
  color: #fff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
i,
.logo {
  font-size: 20px;
  cursor: pointer;
}
</style>

