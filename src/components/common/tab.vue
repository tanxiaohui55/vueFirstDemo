<template>
  <div class="box">
    <div class="title">
      <i class="el-icon-circle-plus"></i>
      <span> {{ this.$route.meta.title }} </span>
    </div>
    <el-card class="box-card">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane :label="'未读消息(' + unreadCount + ')'" name="first">
          <el-table :data="messgeData" style="width: 100%;font-size:13px;">
            <el-table-column prop="title">
              <template slot-scope="scope">
                <font color=" #409EFF">{{ scope.row.title }}</font>
              </template>
            </el-table-column>

            <el-table-column prop="date" fixed="right" width="180">
            </el-table-column>

            <el-table-column fixed="right" width="100">
              <el-button type="success" size="small" @click="readMsg()"
                >标为已读</el-button
              >
            </el-table-column>
          </el-table>
          <div style="margin-top:20px">
            <el-button type="primary" size="small" icon="el-icon-delete"
              >全部标为已读</el-button
            >
          </div>
        </el-tab-pane>
        <el-tab-pane label="已读消息" name="second">
          <el-table :data="messgeData" style="width: 100%;font-size:13px;">
            <el-table-column prop="title">
              <template slot-scope="scope">
                <font color=" #409EFF">{{ scope.row.title }}</font>
              </template>
            </el-table-column>

            <el-table-column prop="date" fixed="right" width="180">
            </el-table-column>

            <el-table-column fixed="right" width="100">
              <el-button type="danger" size="small">删除</el-button>
            </el-table-column>
          </el-table>
          <div style="margin-top:20px">
            <el-button type="primary" size="small" icon="el-icon-delete"
              >全部删除</el-button
            >
          </div></el-tab-pane
        >
        <el-tab-pane label="已删消息" name="third">
          <el-table :data="messgeData" style="width: 100%;font-size:13px;">
            <el-table-column prop="title">
              <template slot-scope="scope">
                <font color=" #409EFF">{{ scope.row.title }}</font>
              </template>
            </el-table-column>

            <el-table-column prop="date" fixed="right" width="180">
            </el-table-column>

            <el-table-column fixed="right" width="100">
              <el-button type="warning" size="small">清除列表</el-button>
            </el-table-column>
          </el-table>
          <div style="margin-top:20px">
            <el-button type="primary" size="small" icon="el-icon-delete"
              >全部清空</el-button
            >
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-card>
  </div>
</template>
<script>
import { apiAddress, textPost } from "../../api/index";
import https from "../../utils/http.js";
import Axios from "axios";
import { mapState } from "vuex";

export default {
  name: "Tab",
  data() {
    return {
      activeName: "first",
      unreadCount: 0
    };
  },
  computed: {
    ...mapState(["messgeData"]),
    unreadCount: function() {
      unreadCount = messgeData.length;
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
  mounted() {
  
  }
};
</script>
<style scoped>
@import "../../style/pageHead";
</style>
