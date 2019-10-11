// 在这里我们对axios进行初始化后，暴露给需要引用的文件，方便开发。
import axios from 'axios';
import config from '@/config/index';

// 创建axios实例，并进行配置
const service = axios.create({
    baseURL:config.baseURL,// api的base_url
    timeout:10000,// 请求超时时间
})

// 利用axios的请求拦截和响应拦截可以对登录和权限方面进行控制，具体需求可以进行其他配置
    // 1、请求拦截器
        service.interceptors.request.use(
            config => {
                // 这里可以自定义一些config 配置

                return config;
            },
            error => {
                //  这里处理一些请求出错的情况

                Promise.reject(error);
            }
        )

    // 2、响应拦截器
        service.interceptors.response.use(
            response => {
                const res = response.data
                // 这里处理一些response 数据正常返回时的逻辑

                return res;
            },
            error => {
                // 这里处理一些response 数据返回异常时的逻辑

                return Promise.reject(error)
            }
        )

export default service;