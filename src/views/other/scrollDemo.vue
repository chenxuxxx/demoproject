<template>
  <div class="scroll">
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li class="box">aaaaaaaaaaaa</li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <div @click="handlerTop"
         class="handerClickTop">点我跳到盒子顶部</div>
    <div @click="handlerBottom"
         class="handerClickBottom">点我跳到盒子顶部</div>

  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    handlerTop () {
      document.querySelector('.box').scrollIntoView({
        block: 'start',
        behavior: 'smooth'
      })
    },
    // 让元素跳到盒子顶部
    handlerBottom () {
      document.querySelector('.box').scrollIntoView({
        block: 'end',
        behavior: 'smooth'
      })
    }
  }
}
</script>
<style lang="less">
ul {
  height: 600px;
  float: left;
  background-color: green;
  overflow-y: auto;
  transition: 2s;
  li {
    width: 400px;
    height: 300px;
    margin-top: 10px;
    border: 1px solid red;
    background: gray;
    transition: 2s;
  }
}
.handerClickTop {
  float: right;
  background-color: yellow;
  height: 100px;
  width: 100px;
}
.handerClickBottom {
  float: right;
  background-color: skyblue;
  height: 100px;
  width: 100px;
}
</style>
