import axios from 'axios'
import { ElMessage } from 'element-plus'

// 创建axios实例
const AxiosInstances = axios.create({
  headers: {
    'Content-type': 'application/json; charset=UTF-8'
  },
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: process.env.VUE_APP_BASE_API,
  // 超时
  timeout: 10000,
  withCredentials: false // default
})
const requestMap = new Map() // 用于保存正在进行的请求

// 请求拦截器
AxiosInstances.interceptors.request.use(
  (config) => {
    // 检查请求队列中是否存在相同请求
    const key = `${config.url}_${config.method}`
    console.log(key)
    if (requestMap.has(key)) {
      ElMessage({
        message: '请不要重复请求',
        type: 'success'
      })
      setTimeout(() => {}, 1000)
    }
    // 添加当前请求到集合中
    requestMap.set(key, true)
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
AxiosInstances.interceptors.response.use(
  (res) => {
    const key = `${res.config.url}_${res.config.method}`
    requestMap.delete(key)
    // 响应数据进行处理
    return res.data
  },
  (error) => {
    // 响应错误进行处理
    const key = `${error.config.url}_${error.config.method}`
    requestMap.delete(key)
    console.log(error)
    return Promise.reject(error)
  }
)

export default AxiosInstances
