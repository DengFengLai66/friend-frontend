import axios, {AxiosInstance} from "axios";

// const isDev = process.env.NODE_ENV === 'development';

const myAxios: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8081/api'

   
});

myAxios.defaults.withCredentials = true;

// Add a request interceptor
myAxios.interceptors.request.use(function (config) {
    console.log('我要发请求啦', config)
    // Do something before request is sent
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
myAxios.interceptors.response.use(function (response) {
    console.log('我收到你的响应啦', response)
    // 未登录则跳转到登录页
    if (response?.data?.code === 40100) {
        window.location.href = `/user/login`;
    }
    // if (response?.data?.code === 0) {
    //     window.location.href = `/user/login`;
    // }
    // Do something with response data
    //alert(response?.data?.code)
    return response.data;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});

export default myAxios;

