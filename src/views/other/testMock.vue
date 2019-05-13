<template>
  <div class='mock'>
    <button class="test" @click="hander('a')">点我打开控制台 看看mock数据成功没 </button>
    <button class="test" @click="getTableData('a')">点我打开控制台 看看表格数据获取成功没 </button>
  </div>
</template>

<script>
import { testMock, getTableDataApi } from '@/api/api.js'
export default {
  methods: {
    hander (a) {
      testMock(a).then((res) => {
        console.dir(res)
      }).catch((error) => {
        console.log(error)
      })
    },
    getTableData (a) {
      getTableDataApi(a).then((res) => {
        console.dir(res)
      }).catch((error) => {
        console.log(error)
      })
    }
  }
}
</script>
<style lang='less' scoped>
</style>
