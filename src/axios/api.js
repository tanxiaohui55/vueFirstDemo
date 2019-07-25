import { fetchGet,fetchPost} from "./http";

// 调用方式见tab.vue
export const apiAddress = () => fetchGet('/restful/:id/list');
export const textPost=(parms)=>fetchPost('/testPost',parms);
export const tableData=()=>fetchGet('/mock')
export const menuItem=()=>fetchGet('/getMenu');
