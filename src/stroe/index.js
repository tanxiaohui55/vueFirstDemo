import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex);

import state from "./state"
import actions from './actions';
import getters from "./getters";
import mutations from "./mutations"

//一定注入到main.js中去
export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters
})