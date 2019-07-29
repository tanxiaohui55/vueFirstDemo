import Vue from "vue";
import Router from "vue-router";
//引入组件
import Login from "../components/page/Login";
import Login2 from "../components/page/Login2";
import Dashboard from "../components/common/dashboard";
import Error404 from "../components/common/Error404";
import Index from "../components/page/Index";
import BasicTable from "../components/common/basicTable";
import Tab from "../components/common/Tab";
import Permissions from "../components/common/permissions";
import BasicForm from "../components/common/basicForm";
import About from "../components/common/about"

Vue.use(Router);

export default new Router({
    routes: [
        //懒加载，访问此路由时才加载这个js
        //{ path: '/', component: resolve => require(['../components/page/Login.vue'], resolve) },

        // { path: '/', component: Login2 },
        { path: "/", redirect: "/index" },
        { path: "/login", name: "login", component: Login },
        {
            path: "/index",
            name: "index",
            component: Index,
            children: [
                { path: "", redirect: "dashboard" },
                { path: "dashboard", name: "dashboard", component: Dashboard, meta: { title: "系统首页" } },
                { path: "basicTable", name: "basicTable", component: BasicTable, meta: { title: "基础表格" } },
                { path: "tabs", name: "tabs", component: Tab, meta: { title: "tab选项卡" } },
                { path: "permissions", name: "permissions", component: Permissions, meta: { title: "权限设置" } },
                { path: 'basicForm', name:'basicForm', component: BasicForm ,meta:{title:'表单相关/基本表单'}},
                {path:'about',name:'about',component:About,meta:{title:'reade me'}}
            ]
        },
        { path: "*", component: Error404 },
        { path: "/Error404", component: Error404 }
    ]
});