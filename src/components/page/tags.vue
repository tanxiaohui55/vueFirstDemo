<template>
  <div class="container">
    <div class="tab">
      <el-tag
        :key="index"
        v-for="(tag, index) in tagsList"
        closable
        @close="handleClose(index)"
        :class="{ active: isActive(tag.path) }"
      >
        <router-link :to="tag.path"> {{ tag.title }}</router-link>
      </el-tag>
    </div>
    <div class="close">
      <el-dropdown :hide-on-click="false" @command="handleTags">
        <span class="el-dropdown-link">
          关闭标签
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="other">关闭其他</el-dropdown-item>
          <el-dropdown-item command="all">关闭所有</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
import Bus from "../../utils/bus";
export default {
  name: "",
  data() {
    return {
      tagsList: []
    };
  },
  methods: {
    // 当前激活tab
    isActive(path) {
      return path === this.$route.fullPath;
    },
    //
    setTags(route) {
      //判断已有队列是否存在当前路由,没有则添加
      const isExist = this.tagsList.some(item => {
        return item.path === route.fullPath;
      });
      if (!isExist) {
        if (this.tagsList.length >= 8) {
          // 当队列中大于8个时，删除最前1个
          this.tagsList.shift();
        }
        this.tagsList.push({
          title: route.meta.title,
          path: route.fullPath,
          name: route.matched[1].components.default.name
        });
      }
      Bus.$emit("tags", this.tagsList);
    },
    //关闭单个标签页
    handleClose(index) {
      const delItem = this.tagsList.splice(index, 1)[0];
      const item = this.tagsList[index]
        ? this.tagsList[index]
        : this.tagsList[index - 1];
      if (item) {
        delItem.path === this.$route.fullPath && this.$router.push(item.path);
      } else {
        this.$router.push("/");
      }
    },
    // / 关闭全部标签
    closeAll() {
      this.tagsList = [];
      this.$router.push("/");
    },
    // 关闭其他标签
    closeOther() {
      const curItem = this.tagsList.filter(item => {
        return item.path === this.$route.fullPath;
      });
      this.tagsList = curItem;
    },
    handleTags(command) {
      command === "other" ? this.closeOther() : this.closeAll();
    }
  },
  computed: {
    showTags() {
      return this.tagsList.length > 0;
    }
  },
  watch: {
    $route(newValue, oldValue) {
      this.setTags(newValue);
    }
  },
  created() {
    this.setTags(this.$route);
    // 监听关闭当前页面的标签页
    // Bus.$on("close_current_tags", () => {
    //   for (let i = 0, len = this.tagsList.length; i < len; i++) {
    //     const item = this.tagsList[i];
    //     if (item.path === this.$route.fullPath) {
    //       if (i < len - 1) {
    //         this.$router.push(this.tagsList[i + 1].path);
    //       } else if (i > 0) {
    //         this.$router.push(this.tagsList[i - 1].path);
    //       } else {
    //         this.$router.push("/");
    //       }
    //       this.tagsList.splice(i, 1);
    //       break;
    //     }
    //   }
    // });
  }
};
</script>
<style scoped>
/* elemenui css start */
.el-tag + .el-tag {
  margin-left: 10px;
}
.el-dropdown {
  font-size: 12px !important;
  color: #409eff !important;
}
.el-tag .el-icon-close {
  color: #e6a23c !important ;
}
.active {
  background: #409eff !important;
}
.active a {
  color: #fff !important ;
}

/* elementui css end */

.container {
  height: 40px;
  background: white;
  display: flex;
  justify-content: space-between;
  padding: 0 20px 0 5px;
}
.tab {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.close {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>
