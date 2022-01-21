import http from '../unit/http'

let headerV4 = {
  Authorization:
    '7e9559776d2e4aac37509df2bec2c40b49013cb9b0a22ca1ee08f7986b243b73:eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lc3BhY2VfaWQiOjF9.u5GQ2tNmjF6hc_um_VLdPU2GPzPLB0_LBK9rayQw5Bk',
}
let headerSQL = {
  Authorization:
    'gid://slp-table-mapper/Namespace/1&eyJhbGciOiJIUzI1NiJ9.eyJnaWQiOiJnaWQ6Ly9za3lsYXJrL05hbWVzcGFjZS8xIn0.d4LgEu5ErE0ORVcAABxUCfr5Q_ANYOwBhUL7M_y4Kgo',
}
// admin
export default {
  // 修改表单数据
  putFormsAmendAPI(tableID, dataID, data) {
    return http.put(`/api/v4/forms/${tableID}/responses/${dataID}`, data, headerV4)
  },
  // sql查询
  getSqlJsonAPI(sql) {
    return http.get(`/api/table_mappers/json_api/execute_select_sql?sql=` + sql, '', headerSQL)
  },
  // 渲染流程
  getflowAPI(flowID) {
    return http.get(`/api/v4/yaw/flows/${flowID}`, '', headerV4)
  },
  // 流程填写
  postflowAPI(flowID, data) {
    return http.post(`/api/v4/yaw/flows/${flowID}/journeys`, data, headerV4)
  },
}
