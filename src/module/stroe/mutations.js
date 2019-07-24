export default {
    toggleMenu(state){
        this.state.isCollapse=!this.state.isCollapse;
    },
    setMenu(state,menus){          
        this.state.menuItem=menus      
    }
}