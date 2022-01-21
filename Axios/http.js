/** **   http.js   ****/
// 导入封装好的axios实例
import request from './request'
const http = {
  /**
   * methods: 请求
   * @param url 请求地址
   * @param params 请求参数
   * @headers headers 请求参数
   */
  get(url, params, headers) {
    const config = {
      method: 'get',
      url: url,
      params: params,
      headers, // 权限
    }
    // if (params) config.params = params
    return request(config)
  },
  post(url, params, headers) {
    const config = {
      method: 'post',
      url: url,
      headers: headers,
    }
    if (params) config.data = params
    return request(config)
  },
  put(url, params, headers) {
    const config = {
      method: 'put',
      url: url,
      headers: headers,
    }
    if (params) config.data = params
    return request(config)
  },
}
// 导出
export default http
