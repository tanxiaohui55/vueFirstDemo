<template>
  <div class="container" v-loading="loading">
    <!-- 是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转 -->
    <el-menu
      class="el-menu-vertical-demo"
      :default-active="onRoutes"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      background-color="#F9FAFE"
      text-color="#666"
      router
    >
      <template v-for="menu in menuItem">
        <template v-if="menu.subs && menu.has == true">
          <el-submenu :index="menu.index" :key="menu.index">
            <!-- slot="title"用于显示为标题项，不能丢 -->
            <template slot="title">
              <i :class="menu.icon"></i>
              <span slot="title">{{ menu.title }}</span>
            </template>
            <template v-for="item in menu.subs">
              <!-- <el-menu-item-group> -->
              <el-menu-item
                v-if="item.has == true"
                :index="item.index"
                :key="item.index"
              >&nbsp;&nbsp;&nbsp;&nbsp;{{ item.title }}</el-menu-item>
              <!-- </el-menu-item-group> -->
            </template>
          </el-submenu>
        </template>
        <template v-else-if="menu.has == true">
          <el-menu-item :index="menu.index" :key="menu.index">
            <i :class="menu.icon"></i>
            <span slot="title">{{ menu.title }}</span>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>
<script>
import Bus from "../../utils/bus";
import { mapState, mapActions } from "vuex";
import { menuItem } from "../../axios/api";
export default {
  name: "Nav",
  data() {
    return {};
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    ...mapActions(["setMenu"])
  },
  computed: {
    // 根据路由来判断菜单激活项
    onRoutes: function() {
      return this.$route.path.replace("/index/", "");
    },
    ...mapState(["isCollapse", "menuItem"]),
    loading: function() {
      return this.menuItem.length ? false : true;
    }
  },
  created() {
    // menuItem().then(res=>{
    //   // this.menuItems=res.data.menuItem;
    //   this.$store.dispatch('setMenu');
    // })
  },
  beforeCreate() {
    this.$store.dispatch("setMenu").then(() => {});
  }
};
</script>
<style scoped>
/*  展开时的动态*/
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.container {
  height: 100% !important;
  background: #f9fafe;
}
</style>
