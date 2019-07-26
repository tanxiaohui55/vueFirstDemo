<template>
  <div class="box" v-loading="loading">
    <div class="title">
      <i class="el-icon-circle-plus"></i>
      <span>权限配置</span>
    </div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>卡片名称</span>
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>
      <div class="cardBody" style="margin-left:30px">
        <el-tree
          :data="menuItem"
          show-checkbox
          node-key="id"
          :default-expanded-keys="[4, 7]"
          :default-checked-keys="menuItemCheck"
          :props="defaultProps"
          ref="tree"
        ></el-tree>
        <div class="buttons" style="margin-top:30px">
          <el-button type="primary" plain>保存</el-button>
          <el-button @click="getCheckedNodes">通过 node 获取</el-button>
          <el-button @click="getCheckedKeys">通过 key 获取</el-button>
          <el-button @click="setCheckedNodes">通过 node 设置</el-button>
          <el-button @click="setCheckedKeys">通过 key 设置</el-button>
          <el-button @click="resetChecked">清空</el-button>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script>
import { mapState } from "vuex";
import { menuItem } from "../../axios/api";
export default {
  name: "Permissions",
  data() {
    return {
      defaultProps: {
        children: "subs",
        label: "title"
      }
    };
  },
  computed: {
    ...mapState(["menuItem"]),
    //设置默认选中项
    menuItemCheck: function() {
      var checked = [];
      for (let i = 0; i < this.menuItem.length; i++) {
        if (this.menuItem[i].has == true && !this.menuItem[i].subs) {
          checked.push(this.menuItem[i].id);
        }
        if (this.menuItem[i].subs) {
          for (let j = 0; j < this.menuItem[i].subs.length; j++) {
            if (this.menuItem[i].subs[j].has == true) {
              checked.push(this.menuItem[i].subs[j].id);
            }
          }
        }
      }
      return checked;
    },
    loading: function() {
      return this.menuItem.length ? false : true;
    }
  },
  methods: {
    getCheckedNodes() {
      console.log(this.$refs.tree.getCheckedNodes());
      // console.log(this.menuItemCheck);
    },
    getCheckedKeys() {
      console.log(this.$refs.tree.getCheckedKeys());
    },
    setCheckedNodes() {
      this.$refs.tree.setCheckedNodes([
        {
          id: 5,
          label: "二级 2-1"
        },
        {
          id: 9,
          label: "三级 1-1-1"
        }
      ]);
    },
    setCheckedKeys() {
      this.$refs.tree.setCheckedKeys([3]);
    },
    resetChecked() {
      this.$refs.tree.setCheckedKeys([]);
    }
  },
  watch: {}
};
</script>
<style scoped>
@import "../../style/pageHead";
</style>
