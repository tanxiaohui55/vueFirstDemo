import { menuItem } from "../../api/index.js"
export default {
    toggleMenu({ commit }) {
        commit('toggleMenu');
    },
    setMenu({ commit }) {
        menuItem().then(res => {
            commit("setMenu", res.data.menuItem);
        });
    }

}