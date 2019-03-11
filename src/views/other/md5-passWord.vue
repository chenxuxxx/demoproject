<template>
  <div class="login">
    <input type="text"
           v-model="userName"><br>
    <input type="password"
           v-model="password">
    <button @click="handler">点击打印用户名密码</button>
  </div>
</template>

<script>
import md5 from 'js-md5'
// import { loginApi, loginAuthAnhuiApi, postSignedDataAnhuiApi, homeAllDataApi } from '@/axios/api'
// import { sessionStorageSet, sessionStorageGet } from '@/utils/utils'
// import { mapActions } from 'vuex'
export default {
  data () {
    return {
      userName: '',
      password: ''
    }
  },
  methods: {
    handler () {
      console.log(this.userName)
      console.log(this.password)
      console.log(md5(this.password))
    }
  },
  mounted () {
    // this.loginType = sessionStorageGet('LOGIN_TYPE')
  }
}
</script>

<style>
</style>
