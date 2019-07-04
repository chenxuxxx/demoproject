<template>
 <div class= 'biaozhu'>
   <p>如果感到开心,你就拍拍手,如果感到不开心,你也拍拍手.</p>
   <button @click="handler">点击标注</button>
 </div>
</template>

<script>
import Mark from 'mark.js'
export default{
  methods: {
    handler () {
      let mubiaoDOM = document.querySelector('.biaozhu')
      var instance = new Mark(mubiaoDOM)
      console.log(instance)
      console.log(Mark)
      instance.mark('开心')
    }
  }
}
</script>
<style lang='less' scoped>

</style>
