import $axios from './index'
export function testApi (params) {
  return $axios({
    // /evidence是代理设置的开头  后面是接口地址
    url: '/evidence/evidence-zfkh-web/police/cases/listPolice',
    method: 'POST',
    data: params
    // responseType: 'blob' // 如果是文件流的格式 设置返回格式
  })
}
