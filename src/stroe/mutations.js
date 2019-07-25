export default {
    toggleMenu(state) {
        this.state.isCollapse = !this.state.isCollapse;
    },
    setMenu(state, menus) {
        this.state.menuItem = menus
    },
    readSingleMsg({ state }, index) {
        for (let i = 0; i < this.state.unreadMsgData.length; i++) {
            if (this.state.unreadMsgData[i].id == index) {
                var temp = this.state.unreadMsgData.splice(i, 1);
                this.state.readMsgData.unshift(temp[0]);
            }

        }
    },
    readAllMsg({ state }) {
        for (let i = 0; i <= this.state.unreadMsgData.length; i++) {
            var temp = this.state.unreadMsgData.splice(0, 1);
            this.state.readMsgData.unshift(temp[0]);
        }
    }
}