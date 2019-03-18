import $axios from './index'
export function testApi (params) {
  return $axios({
    url: '/api/user',
    method: 'POST',
    data: params
  })
}
