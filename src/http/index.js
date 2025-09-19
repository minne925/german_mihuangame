import axios from 'axios';
import api from './api';
import Vue from 'vue';
let Base64 = require('js-base64').Base64;
import { Toast } from 'vant';
import qs from 'qs';
import i18n from '@/lang';

Vue.use(Toast);

const instance = axios.create({
    baseURL: window.location.origin + '/api',
    //  baseURL: "https://drop2j0y0s.xyz/" + '/api',
    timeout: 5000, //默认超时时长
});

//请求拦截器
instance.interceptors.request.use(
    (config) => {
        if (config.method === 'post') {
            if (config.data instanceof FormData) {
                // 如果是 FormData 类型（文件上传），设置为 "multipart/form-data"
                config.headers = {
                    'content-type': 'multipart/form-data',
                };
            } else {
                // 否则，默认为 "application/x-www-form-urlencoded;charset=UTF-8"
                config.headers = {
                    'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
                };
            }
        }
        if (localStorage.getItem('Lang')) {
            config.headers.language = localStorage.getItem('Lang');
        }
        if (localStorage.getItem('token')) {
            config.headers.token = localStorage.getItem('token');
        }

        return config;
    },
    (err) => {
        console.error('请求失败', err);
    }
);

//响应拦截器
instance.interceptors.response.use(
    (res) => {
        //此处对响应数据做处理
        if (res.data.msg === '鉴权错误') {
            //  localStorage.setItem('token','');
            this.$router.push({ path: '/Login' });
        }
        return res; //该返回对象会传到请求方法的响应对象中
    },
    (err) => {
        // 响应错误处理
        return Promise.reject(err);
    }
);

//封装axios请求方法，参数为配置对象
//option = {method,url,params} method为请求方法，url为请求接口，params为请求参数
async function http(option = {}) {
    let result = null;
    if (option.method === 'get' || option.method === 'delete') {
        // 处理 get、delete 请求
        await instance[option.method](api[option.url], { params: option.data })
            .then((res) => {
                result = res.data;
                result.data = JSON.parse(Base64.decode(result.data));
                if (result.msg) result.msg = i18n.t(result.msg);
                if (process.env.NODE_ENV == 'development') {
                    console.log('----------get or delete', option.url, result);
                }

                //    console.log(res.config.url, result, "result");
            })
            .catch((err) => {
                // console.log('----------Err get or delete', err);
                result = err;
                if (result && result.msg) result.msg = i18n.t(result.msg);
            });
    } else if (option.method === 'post' || option.method === 'put') {
        // 处理 post、put 请求
        let requestData = option.data;
        // 如果数据不是 FormData 类型，则使用 qs.stringify
        if (!(requestData instanceof FormData)) {
            requestData = qs.stringify(requestData);
        }
        await instance[option.method](api[option.url], requestData)
            .then((res) => {
                result = res.data;
                result.data = JSON.parse(Base64.decode(result.data));
                if (result.msg) result.msg = i18n.t(result.msg);
                //    console.log(res.config.url, result, "result");
                // console.log('----------post or put', option.url, result);
            })
            .catch((err) => {
                // console.log('----------Err post or put', err);
                result = err;
                if (result && result.msg) result.msg = i18n.t(result.msg);
            });
    }

    return result;
}

export default http;
