<template>
  <div class="contaniner">
    <div class="header">
      <v-header></v-header>
    </div>

    <div class="body">
      <div class="nav">
        <v-nav></v-nav>
      </div>
      <div class="content">
        <v-tags></v-tags>
        <router-view />
      </div>
    </div>
  </div>
</template>
<script>
import vHeader from "./header.vue";
import vNav from "./nav";
import vTags from "./tags";
export default {
  name: "Index",
  components: { vHeader, vNav, vTags },
  data() {
    return {};
  }
};
</script>
<style scoped>
.contaniner {
  height: 100%;
}
/* 解决不定宽 ，左侧任意，右侧独占*/
.body {
  display: flex;
  /* 两个因子同运算符号之间必须存在空格 */
  /* height: calc(100% - 60px); */
  min-height: calc(100% - 60px);
}
.content {
  flex: 1;
}
</style>
