<template>
  <div class="ifarm">
    <p style="height:80px;color:red;font-size:30px;text-align:center;line-height:80px;">我肖雪岂是你等凡夫俗子所能查到的</p>
    <iframe src="http://www.baidu.com" frameborder="0" style="height:900px;width:100%"></iframe>
  </div>
</template>

<script>
// import { testApi } from '@/api/api.js'
export default {
  data () {
    return {
    }
  },
  methods: {
    demo (name, age) {
      console.log(name)
      console.log(age)
    }
  },
  mounted () {
    // this.loginType = sessionStorageGet('LOGIN_TYPE')
    this.demo('乐展', 18)
  }
}
</script>

<style>
</style>
