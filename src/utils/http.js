import axios from 'axios'
import qs from 'qs'

axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5d311abe1436b138dea960f7/example';

//post请求传参序列号（添加请求拦截器）
axios.interceptors.request.use(config => {
    if (config.method === 'post') {
        config.data = qs.stringify(config.data);
        //每次发送请求之前判断vuex中是否存在token        
        // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况
        // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断 
        // const token = store.state.token;        
        // token && (config.headers.Authorization = token); 
    }
    return config;
}, error => {
    console.log("传参错误");
    return Promise.reject(error);
})

//返回相应拦截
axios.interceptors.response.use(response => {
    if (response.status === 200) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(response);
    }
}, error => {
    console.log("网络异常");
    return Promise.reject(error);
})

//返回一个promise （发送post请求）
export function fetchPost(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, qs.stringify(params)).then(response => {
            resolve(response);
        }, err => {
            reject(err);
        })
    })
}

////返回一个Promise(发送get请求)
export function fetchGet(url, param) {
    return new Promise((resolve, reject) => {
        axios.get(url, { params: param })
            .then(response => {
                resolve(response)
            }, err => {
                reject(err)
            })

    })
}

export default {
    fetchPost,
    fetchGet,
}