<template>
  <div class='referh'>
    <p v-for="item in list" :key="item" style="height:100px;">
    Line:
    <span v-text="item"></span>
    </p>
    <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading">
      <span slot="no-more" style="padding-bottom:50px;">没有更多了～</span>
    </infinite-loading>
  </div>
</template>

<script>
import InfiniteLoading from 'vue-infinite-loading'
export default {
  data () {
    return {
      page: '1',
      size: '10',
      list: []
    }
  },
  methods: {
    onInfinite () {
      setTimeout(() => { // 表示请求
        const temp = []
        for (let i = this.list.length + 1; i <= this.list.length + 20; i++) {
          temp.push(i)
        }
        this.list = this.list.concat(temp)
        this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
        if (this.list.length >= 40) {
          this.$refs.infiniteLoading.$emit('$InfiniteLoading:complete')
        }
      }, 2000)
    }
  },
  mounted () {
  },
  components: {
    InfiniteLoading
  }
}
</script>

<style lang='less' scoped>
.referh {
  height: 100vh;
  overflow: auto
}
</style>
