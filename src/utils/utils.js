
/**
 * [localStorageSet 本地存储存值方法]
 * @param  {[string]} name [存储名称，需为String类型]
 * @param  {[string||object]} obj  [需存储的字符串或对象]
 * @return {[bool]}      [参数错误返回false，正确返回true]
 */
/** 引入上传工具类
 *http://fex.baidu.com/webuploader/
*/
// import WebUploader from '@/utils/webuploader.js'
/**
 * 上传工具类
 *  fileUploadParams对象
 *  uploadUrl       (必传)       上传地址
 *  multiple        (选传)       是否支持多上传
 *  buttonText      (选传)       上传按钮文字
 *  sizeLimit      （选传）       上传大小限制（单位为B）
 *  fileNumLimit   （选传）       上传数量限制
 *  accept         （选传）       文件上传类型
 *  beforeUpload    (选传)       上传前逻辑处理函数     参数：file  当前文件
 *  uploadProgress  (选传)       上传中逻辑处理函数     参数：file  当前文件, percentage 上传百分比
 *  uploadSuccess   (选传)       上传成功逻辑处理函数    参数：file  当前文件, response   后台接口返回数据
 *  uploadError     (选传)       上传失败逻辑处理函数    参数：type  失败编码
 *  uploadComplete  (选传)       上传完成逻辑处理函数    参数：file, 当前文件
 *  fileQueued 当文件被加入队列以后触发 参数：File文件
 *  filesQueued 当一批文件添加进队列以后触发 参数: File文件数组数组
 *  error 上传失败 参数: type [F_EXCEED_SIZE(文件大小不能超过限制),Q_EXCEED_NUM_LIMIT(文件上传已达到最大上限数)]
*/
// export const webUploader = obj => {
//   let uploader = WebUploader.create(Object.assign({
//   // 是否自动上传
//     auto: true,
//     // swf文件路径
//     swf: '@/components/fileUpload/Uploader.swf',
//     // 文件接收服务端
//     server: '',
//     pick: '#picker', // dom结构
//     // 是否可以重复上传
//     duplicate: true,
//     // 允许选择文件格式
//     accept: {
//       title: 'allFile',
//       extensions: 'doc,docx,pdf,jpg,jpeg,bmp,png',
//       mimeTypes: 'image/*,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/pdf'
//     },
//     // 限制上传个数
//     fileNumLimit: 200,
//     // 限制单个上传文件的大小(默认200MB)
//     fileSingleSizeLimit: 204800000,
//     // 上传token等参数
//     formData: null
//   }, obj))
//   return uploader
// }
export const sessionStorageSet = (name, obj) => {
  if (typeof obj === 'undefined') {
    return false
  }
  if (typeof name !== 'string') {
    return false
  }
  let saveStr = ''
  if (typeof obj === 'object') {
    saveStr = JSON.stringify(obj)
  } else {
    saveStr = obj
  }
  sessionStorage.setItem(name, saveStr)
  return true
}

/**
 * [localStorageGet 本地存储取值方法]
 * @param  {[string]} name [本地存储key]
 * @return {[string||object]}      [返回值]
 */
export const sessionStorageGet = (name) => {
  if (typeof name !== 'string') {
    return
  }
  var savedStr = sessionStorage.getItem(name)
  // 非法值返回
  if (!savedStr) {
    return
  }
  var result
  if ((savedStr.indexOf('"') < 0 && savedStr.indexOf('\'') < 0) || savedStr.indexOf(':') < 0) {
    return savedStr
  }
  try {
    result = JSON.parse(savedStr)
    return result
  } catch (e) {
    return savedStr
  }
}

/*
[localStorageRemove 删除某个item]
@param {[string]} name [删除key]
 */
export const sessionStorageRemove = (name) => {
  if (typeof name !== 'string') {
    return
  }
  sessionStorage.removeItem(name)
}

/**
 * [localStorageClear 清除本地存储]
 * @param  {[string]} name []
 */
export const sessionStorageClear = (name) => {
  if (name) {
    return
  }
  sessionStorage.clear()
}
/**
 * @param date 标准时间格式:Fri Nov 17 2017 09:26:23 GMT+0800 (中国标准时间)
 * @param type 类型
 * type == 1 ---> "yyyy-mm-dd"
 * type == 2 ---> "yyyy年mm月dd日"
 * type == 3 ---> "yyyymmddhhMMss"
 * type == '' ---> "yyyy-mm-dd hh:MM:ss"
 */
export const formatDate = (date, type) => {
  // 时间为空时候不需要进行操作
  if (!date) {
    return false
  }
  date = new Date(date)
  let year = date.getFullYear() // 年
  let month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1 // 月
  let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate() // 日
  let hour = date.getHours() < 10 ? '0' + date.getHours() : date.getHours() // 时
  let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes() // 分
  let seconds = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds() // 秒
  if (type === 1) {
    return year + '-' + month + '-' + day
  } else if (type === 2) {
    return year + '年' + month + '月' + day + '日' + hour + '时' + minutes + '分'
  } else if (type === 3) {
    return year + '' + month + '' + day + '' + hour + '' + minutes + '' + seconds
  } else if (type === 4) {
    return year + '-' + month + '-' + day + ' ' + hour + ':' + minutes
  } else {
    return year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds
  }
}
/**
 * 判断当前客户端是否支持Flash
 */
export const isSupportFlash = (flashTip) => {
  if (navigator.userAgent.indexOf('MSIE') !== -1) {
    try {
      // let swf1 = new window.ActiveXObject('ShockwaveFlash.ShockwaveFlash')
      // console.log(typeof swf1)
    } catch (e) {
      flashTip()
    }
  } else {
    try {
      var swf2 = navigator.plugins['Shockwave Flash']
      if (swf2 === undefined) {
        flashTip()
      }
    } catch (e) {
      flashTip()
    }
  }
}

// 判断当前是否为ie9
export const IEVersion = () => {
  var userAgent = navigator.userAgent // 取得浏览器的userAgent字符串
  var isIE = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1 // 判断是否IE<11浏览器
  var isEdge = userAgent.indexOf('Edge') > -1 && !isIE // 判断是否IE的Edge浏览器
  var isIE11 = userAgent.indexOf('Trident') > -1 && userAgent.indexOf('rv:11.0') > -1
  if (isIE) {
    var reIE = new RegExp('MSIE (\\d+\\.\\d+);')
    reIE.test(userAgent)
    var fIEVersion = parseFloat(RegExp['$1'])
    if (fIEVersion === 7) {
      return 7
    } else if (fIEVersion === 8) {
      return 8
    } else if (fIEVersion === 9) {
      return 9
    } else if (fIEVersion === 10) {
      return 10
    } else {
      return 6// IE版本<=7
    }
  } else if (isEdge) {
    return 'edge'// edge
  } else if (isIE11) {
    return 11 // IE11
  } else {
    return -1// 不是ie浏览器
  }
}
// 封装原生ajax
export const ajax = (obj) => {
  var xhr = new XMLHttpRequest()
  xhr.open('POST', obj.url, false)
  xhr.setRequestHeader('Content-Type', 'application/json; charset=utf-8') // 添加http头，发送信息至服务器时内容编码类型
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && (xhr.status === 200 || xhr.status === 304)) { // 304未修改
      obj.fun.call(this, JSON.parse(xhr.responseText))
    }
  }
  xhr.send(obj.data)
}
// 封装深拷贝方法
export var deepCopy = function (source) {
  var sourceCopy = source instanceof Array ? [] : {}
  for (var item in source) {
    sourceCopy[item] = typeof source[item] === 'object' ? deepCopy(source[item]) : source[item]
  }
  return sourceCopy
}
// 用于判断是开发环境还是生产环境
// const prod = process.env.NODE_ENV === 'production'
// 读取配置文件
export const readFiles = function () {
  let xhr = null
  // code for IE7+, Firefox, Chrome, Opera, Safari
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest()
  } else { // code for IE6, IE5
    // eslint-disable-next-line no-undef
    xhr = new ActiveXObject('Microsoft.XMLHTTP')
  }
  if (xhr != null) {
    let urlStr = '../../configData/configData.json'
    xhr.open('GET', urlStr, false)
    xhr.send(null)
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        // return JSON.parse(xhr.responseText)
      }
    }
    return JSON.parse(xhr.responseText)
  }
}
