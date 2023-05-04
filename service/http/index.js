import axios from 'axios'
// import errorCode from '@service/http/errorCode'

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
// 创建axios实例
const http = axios.create({
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: process.env.VUE_APP_BASE_API,
  // 超时
  timeout: 10000,
  withCredentials: false // default
})

// 请求拦截器
http.interceptors.request.use()

// 响应拦截器
http.interceptors.response.use()

export default http
