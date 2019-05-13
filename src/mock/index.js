import Mock from 'mockjs' // 引入mockjs，npm已安装
// import { Random } from 'mockjs' // 引入random对象,随机生成数据的对象，（与占位符@一样）
Mock.setup({
  timeout: 700 // 设置请求延时时间
})
const getdata = function (option) {
  // 定义请求数据方法
  let datalist = []
  for (let i = 0; i < 20; i += 1) {
    const o = {
      // mockjs模拟随机生成数据，生成20条
      recipeId: Mock.Random.guid(),
      billId: Mock.Random.string(10),
      orgId: Mock.Random.string('number', 8, 10),
      Date: Mock.Random.date('yyyy-MM-dd'),
      time: Mock.Random.time('A HH:mm:ss'),
      adress: Mock.Random.county(),
      viewName: Mock.Random.cword(4, 16), // 随机生成任意名称
      personName: Mock.Random.cname(),
      reason: Mock.Random.csentence(10, 32)
    }
    datalist.push(o)
  }
  return {
    data: datalist
  }
}
Mock.mock('/user', /post|get/i, getdata)
// Mock.mock() 可用于直接造数据有返回值  @是一个占位符在mock中代表 Mock.random 造随机数据
Mock.mock('/tableData', (parmas) => {
  return Mock.mock({
    'arr|10': [{
      'id|+1': 1,
      address: '@string(10)',
      imgUrl: '@image',
      status: '未审核'
    }]
  })
})
// console.log(data)
