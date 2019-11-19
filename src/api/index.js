// 封装axiaos shuchen
import axios from 'axios'
import router from '@/router'
import { Message } from 'iview'
import {
  sessionStorageSet,
  sessionStorageGet,
  sessionStorageClear
} from '@/utils/utils'
// import Qs from 'qs'

let instance = axios.create()

instance.defaults.headers = {
  'X-Requested-With': 'XMLHttpRequest',
  'Content-Type': 'application/json; charset=utf-8' // 默认是此值, 部分接口是formdata或其他.
}
// axios.defaults.responseType = 'json'
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
  // 判断网络是否连接
  if (window.navigator.onLine) {
    return config
  } else {
    Message.warning({
      content: '请检查网络或重新登陆系统！',
      duration: 2
    })
  }
}, function (error) {
  return Promise.reject(error)
})

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
  // 数据中心长时间挂起出现session失效后跳转到数据中心登录
  if (response.headers.usertype && response.headers.usertype === 'dataCenter') {
    router.replace({
      name: 'singlePage'
    })
  } else {
    // 取消loading模态框.
    if (!sessionStorageGet('localUserId') && response.headers.userid) {
      sessionStorageSet('localUserId', response.headers.userid)
    }
    Message.destroy()
    Message.warning({
      content: '登录已过期，请重新登录',
      duration: 2
    })
    if ((sessionStorageGet('localUserId') && response.headers.userid && sessionStorageGet('localUserId') !== response.headers.userid) || (response.headers.sessionstatus && response.headers.sessionstatus === 'invalid')) {
      if (!/登录成功/.test(response.data.message)) {
        sessionStorageClear()
        router.replace({
          name: 'login'
        })
        // Message.destroy()
        // Message.warning({
        //   content: '登录已过期，请重新登录',
        //   duration: 2
        // })
        return
      } else {
        sessionStorageSet('localUserId', response.headers.userid)
      }
    }
  }
  //  如果系统被别的系统用iframe嵌入可用parent !== window来进行判断
  // if (response.data.ret && response.data.ret === 302) {
  //   // 判断是否有iframe嵌套
  //   if (parent !== window) {
  //     parent.location.href = response.data.redirectUrl
  //   } else {
  //     window.location.href = response.data.redirectUrl
  //   }
  //   return Promise.reject(response)
  // }
  return response
}, function (error) {
  return Promise.reject(error)
})

// opts参数可覆盖默认值.
const $axios = function (opts) {
  // // 处理304
  // opts.params = {
  //   time: new Date().getTime()
  // }
  return instance(opts)
}
export default $axios
