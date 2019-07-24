//全局过滤器
let dateFilter = (val, flag1) => {
    return (val.toString()).substring(0, 2) + flag1;
}

export default { dateFilter }