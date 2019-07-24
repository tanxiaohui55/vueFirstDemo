import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex);

import state from "./stroe/state"
import actions from './stroe/actions';
import getters from "./stroe/getters";
import mutations from "./stroe/mutations"

//一定注入到main.js中去
export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters
})