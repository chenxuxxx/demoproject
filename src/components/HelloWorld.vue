<template>
  <div class="hello">
    <p>字体图标</p>
    <icon name="home" class="icon-font"></icon>
    <!-- 字体图标使用文档https://github.com/Justineo/vue-awesome/blob/master/README.zh_CN.md -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.icon-font {
  width: 100px;
  height: 100px;
  color: red;
  transform: scale3d(2,2,2);
  transform: rotate(45deg);
}
</style>
