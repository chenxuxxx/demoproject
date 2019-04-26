<template>
  <div class="hello">
    <p>字体图标</p>
    <icon name="home"
          class="icon-font"></icon>
    <!-- 字体图标使用文档https://github.com/Justineo/vue-awesome/blob/master/README.zh_CN.md -->
    <div>{{$store.state.count}}</div>
    <div @click="increment('aa')">点击改变vuex 中的值</div>
    <div @click="handler">点击改变辅助函数testModule中的值</div>
    <input type="text" v-model="count">
  <h1>测试滚动条</h1>
  <ul class="father-box">
    <li style='height:30px; margin-top:2px; background-color:green;'></li>
    <li style='height:30px; margin-top:2px; background-color:green;'></li>
    <li style='height:30px; margin-top:2px; background-color:green;'></li>
    <li style='height:30px; margin-top:2px; background-color:green;'></li>
    <li style='height:30px; margin-top:2px; background-color:green;'></li>
    <li style='height:30px; margin-top:2px; background-color:green;'></li>
    <li style='height:30px; margin-top:2px; background-color:green;'></li>
    <li style='height:30px; margin-top:2px; background-color:green;'></li>
    <li style='height:30px; margin-top:2px; background-color:green;'></li>
    <li style='height:30px; margin-top:2px; background-color:green;'></li>
    <li style='height:30px; margin-top:2px; background-color:green;'></li>
    <li style='height:30px; margin-top:2px; background-color:green;'></li>
    <li style='height:30px; margin-top:2px; background-color:green;'></li>
    <li style='height:30px; margin-top:2px; background-color:green;'></li>
    <li style='height:30px; margin-top:2px; background-color:green;'></li>
    <li style='height:30px; margin-top:2px; background-color:green;'></li>
    <li style='height:30px; margin-top:2px; background-color:green;'></li>
    <li style='height:30px; margin-top:2px; background-color:green;'></li>
    <li style='height:30px; margin-top:2px; background-color:green;'></li>
    <li style='height:30px; margin-top:2px; background-color:green;'></li>
    <li style='height:30px; margin-top:2px; background-color:green;'></li>
    <li style='height:30px; margin-top:2px; background-color:green;'></li>
    <li style='height:30px; margin-top:2px; background-color:green;'></li>
    <li style='height:30px; margin-top:2px; background-color:green;'></li>
    <li style='height:30px; margin-top:2px; background-color:green;'></li>
    <li style='height:30px; margin-top:2px; background-color:green;'></li>
    <li style='height:30px; margin-top:2px; background-color:green;'></li>
    <li style='height:30px; margin-top:2px; background-color:green;'></li>
    <li style='height:30px; margin-top:2px; background-color:green;'></li>
    <li style='height:30px; margin-top:2px; background-color:green;'></li>
  </ul>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      aa: 2
    }
  },
  methods: {
    ...mapMutations(['increment']),
    ...mapMutations('testModules', ['demo']),
    handler () {
      // console.dir(this.demo)
      this.demo(this.aa)
      // this.aa = this.count
    }
  },
  computed: {
    ...mapState('testModules', ['count'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.icon-font {
  width: 100px;
  height: 100px;
  color: red;
  transform: scale3d(2, 2, 2);
  transform: rotate(45deg);
}
.father-box {
  height: 300px;
  background-color: skyblue;
  overflow-x: scroll;
  width: 300px;
}
</style>
