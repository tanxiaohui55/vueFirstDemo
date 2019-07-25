// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//引入elementui
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
// 引入echarts
import Echarts from 'echarts'
//注入store
import store from './stroe/index'
//引入axios
import axios from"axios"
import Qs from "qs" //JS的Object与QueryString的转换。
Vue.prototype.$axios=axios
Vue.prototype.$qs=Qs
//全局过滤器
import filter from "./filter/dateFilter"


Vue.config.productionTip = false


Vue.use(ElementUi,Echarts);

//路由守卫
router.beforeEach((to, form, next) => {
    if (to.path == "/login") {
        next();
    } else {
        if (localStorage.getItem('_username') != "" && localStorage.getItem('_username') != "undefined") {
            next();
        } else {
            next({ path: "/login" });
        }
    }
})
//filter全局过滤器
Object.keys(filter).forEach(key=>{
    Vue.filter(key,filter[key]);
})


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})