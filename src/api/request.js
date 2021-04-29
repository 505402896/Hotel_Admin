import axios from 'axios'

export function request(config) {
    // 1.创建实例
    const instance = axios.create({
        baseURL: 'http://121.196.145.100:8081',
        // baseURL: 'http://localhost:8081',
        timeout: 5000,
        headers: { 'Content-Type': 'application/json' }
    })
    // axios的拦截器
    instance.interceptors.request.use(config => {
        // console.log(config);
        // 响应拦截
        return config;
    }, err => {
        console.log(err);
    });
    instance.interceptors.response.use(res => {
        // console.log(res);
        return res.data
    }, err => {
        console.log(err);
    });

    // 发送真正的网络请求
    return instance(config)
}
