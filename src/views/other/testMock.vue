<template>
  <div class='mock'>
    <button class="test" @click="hander('a')">点我打开控制台 看看mock数据成功没 </button>
  </div>
</template>

<script>
import { testMock } from '@/api/api.js'
export default {
  methods: {
    hander (a) {
      testMock(a).then((res) => {
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
