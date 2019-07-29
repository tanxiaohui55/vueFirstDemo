<template>
  <div class="box">
    <div class="title">
      <i class="el-icon-circle-plus"></i>
      <span>{{ this.$route.meta.title }}</span>
    </div>
    <el-card class="box-card">
      <!--  -->
      <h4>vuejs</h4>
      <p>
        <a
          href="https://cn.vuejs.org/v2/guide/installation.html"
          title="https://cn.vuejs.org/v2/guide/installation.html"
        >vuejs</a>
        渐进式JavaScript 框架，一个轻巧、高性能、可组件化的MVVM库,视图和数据的绑定
      </p>
      <p>1、mvvm框架：model view viewmodel</p>
      <p>2、响应式编程、组件化</p>
      <p>3、单页面应用</p>
      <p class="p25">多页应用：页面跳转->返回html</p>
      <p class="p40">优点：首屏时间快，SEO效果好</p>
      <p class="p40">缺点：页面切换面</p>
      <p class="p25">单页应用：页面跳转->js渲染</p>
      <p class="p40">优点：页面切换快（首次会请求一个html文件，刷新清除一下。切换组件，路径变化，并没有新的html文件请求，页面也变化了</p>
      <p class="p40">缺点：首屏时间稍慢，SEO效果差（SSR服务器端渲染效果）</p>
      <!--  -->

      <!-- vue-cli -->
      <h4>搭建vue开发环境：</h4>
      <p>
        1、安装nodejs ：Javascript运行环境，内置 npm
        <br />2、安装vue
        <code>npm install vue -g</code>
        <br />3、全局vue-cli脚手架
        <code>npm install vue-cli -g</code>
        <br />4、根据模版创建新项目
        <code>vue init webpack-simple mytest</code>
        <br />5、安装工程依赖模块
        <code>cd mytest</code>,
        <code>npm install</code>
        <br />6、运行该项目
        <code>npm run dev</code>
      </p>
      <!--  -->

      <!-- vue 全家桶 -->
      <h4>vue全家桶:vue-cli + vuex + vue-router + axios + element-ui</h4>
      <p>
        <a
          href="https://cli.vuejs.org/zh/guide/prototyping.html"
          title="https://cli.vuejs.org/zh/guide/prototyping.html"
        >vue-cli</a>：是vue官方提供的快速搭建项目的工具；
        <br />
        <a
          href="https://vuex.vuejs.org/guide/actions.html"
          title="https://vuex.vuejs.org/guide/actions.html"
        >vuex</a>:是vue提供的状态管理工具；
        <br />
        <a
          href="https://router.vuejs.org/zh/installation.html"
          title="https://router.vuejs.org/zh/installation.html"
        >vue-router</a>:是vue生态里面的路由工具；
        <br />
        <a
          href="https://www.npmjs.com/package/axios"
          title="https://www.npmjs.com/package/axios"
        >axios</a>:是一个http请求包，vue官网推荐使用axios进行http调用；
        <br />
        <a
          href="https://element.eleme.cn/2.0/#/zh-CN/component/icon"
          title="https://element.eleme.cn/2.0/#/zh-CN/component/icon"
        >element</a>:一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库；
        <br />
      </p>
      <!--  -->
      <!-- 调试工具 -->
      <h4>调试工具Devtools:</h4>
      <p>vue在调试，安装chrome插件vue Devtools</p>
      <!--  -->
      <!-- git -->
      <h4>git</h4>
      <p>
        <a href="https://github.com/" title="https://github.com/">github</a>
        <br />git代码版本控制
        <br />
      </p>
    </el-card>
  </div>
</template>
<script>
export default {
  name: "About",
  data() {
    return {};
  }
};
</script>
<style scoped>
@import "../../style/pageHead";
.box p {
  font-size: 13px;
  line-height: 25px;
}
.box h4 {
  margin: 10px 0 10px 0;
}
code {
  color: #bb86a1;
  font-style: italic;
}
.p25 {
  text-indent: 25px;
}
.p40 {
  text-indent: 40px;
}
</style>
