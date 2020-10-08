/** **   request.js   ****/
// 导入axios
import axios from 'axios'
import Vue from 'vue'
import { Toast } from 'vant'
Vue.use(Toast)
// 1. 创建新的axios实例，
const service = axios.create({
  // baseURL: '/magnate',
  // 超时时间 单位是ms，这里设置了3s的超时时间
  timeout: 3 * 1000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json; application/x-www-form-urlencoded; charset=UTF-8',
    'cache-control': 'max-age=0, private, must-revalidate',
  },
})
let pending = [] // 声明一个数组用于存储每个请求的取消函数和axios标识
let CancelToken = axios.CancelToken
let removePending = (config) => {
  for (let p in pending) {
    if (pending[p].u === config.url.split('?')[0] + '&' + config.method) {
      // 当当前请求在数组中存在时执行函数体
      pending[p].f() // 执行取消操作
      pending.splice(p, 1) // 数组移除当前请求
    }
  }
}
// 2.请求拦截器
service.interceptors.request.use(
  (config) => {
    // 发请求前做的一些处理，数据转化，配置请求头，设置token,设置loading等
    removePending(config) // 在一个axios发送前执行一下取消操作
    config.CancelToken = new CancelToken((c) => {
      // pending存放每一次请求的标识，一般是url + 参数名 + 请求方法，当然你可以自己定义
      pending.push({ u: config.url.split('?')[0] + '&' + config.method, f: c }) // config.data为请求参数
    })
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)
// 3.响应拦截器
service.interceptors.response.use(
  (response) => {
    // 接收到响应数据并成功后的一些共有的处理，关闭loading等

    return response
  },
  (error) => {
    /** *** 接收到异常响应的处理开始 *****/
    if (error && error.response) {
      // 1.公共错误处理
      // 2.根据响应码具体处理
      switch (error.response.status) {
        case 400:
          Toast('错误请求')
          break
        case 401:
          Toast('未授权，请重新登录')
          break
        case 403:
          Toast('拒绝访问')
          break
        case 404:
          Toast('请求错误,未找到该资源')
          break
        case 405:
          Toast('请求方法未允许')
          break
        case 408:
          Toast('请求超时')
          break
        case 422:
          Toast('请填写完整信息~')
          break
        case 500:
          // Toast('服务器繁忙')
          break
        case 501:
          Toast('网络未实现')
          break
        case 502:
          Toast('网络错误')
          break
        case 503:
          Toast('服务不可用')
          break
        case 504:
          Toast('网络超时')
          break
        case 505:
          Toast('http版本不支持该请求')
          break
        default:
          Toast(`连接错误${error.response.status}`)
      }
    } else {
      // 超时处理
      if (JSON.stringify(error).includes('timeout')) {
        Toast('服务器响应超时，请刷新当前页')
      }
      Toast('连接服务器失败,请刷新当前页')
    }

    // alert(error.message)
    /** *** 处理结束 *****/
    // 如果不需要错误处理，以上的处理过程都可省略
    return Promise.resolve(error.response)
  },
)
// 4.导入文件
export default service
