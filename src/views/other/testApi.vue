<template>
  <div class="testApi">
    <button @click="hander" style="font-size:50px">点我测试请求</button>
  </div>
</template>

<script>
import { testApi } from '@/api/api.js'
export default {
  data () {
    return {
      userName: '',
      password: ''
    }
  },
  methods: {
    hander () {
      let parmas = {
        name: '张三',
        age: 18
      }
      testApi(parmas).then((res) => {
        console.log(res)
      }).catch((error) => {
        console.log(error)
      })
    }
  },
  mounted () {
    // this.loginType = sessionStorageGet('LOGIN_TYPE')
  }
}
</script>

<style>
</style>
