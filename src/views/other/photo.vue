<template lang="html">
  <div class="photograph_page">
    <h1 class="pageTitle">请对着镜头拍照</h1>
    <div @click="initPhoto">开始拍照</div>
    <div>
      <div class="video_box">
        <div class="border" v-if="!isShowImg">
          <span class="top_left"></span>
          <span class="top_right"></span>
          <span class="bottom_left"></span>
          <span class="bottom_right"></span>
        </div>
        <video ref="video"></video>
        <img ref="img" class="img" v-show="isShowImg">
      </div>
      <canvas class="canvas" v-show="false" ref="canvas"></canvas>
    </div>
    <div class="button_group">
      <button v-show="isShowImg" title="重新拍照" @click="resetPhoto">重新拍照</button>
      <button v-show="isShowImg" title="确定" @click="surePhoto">确定</button>
      <button title="拍照" @click="photo" v-show="!isShowImg">拍照</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Photograph',
  data () {
    return {
      video: null,
      isShowImg: false,
      dataURL: null,
      track: null
    }
  },
  mounted () {
    // this.initPhoto()
  },
  methods: {
    initPhoto () {
      let vm = this
      // 浏览器兼容
      let mediaDevices = navigator.mediaDevices.getUserMedia({ audio: false, video: { width: 300, height: 400 } })

      mediaDevices
        .then(mediaStream => {
          let video = vm.$refs.video
          // video.src = window.URL.createObjectURL(mediaStream)
          video.srcObject = mediaStream
          video.onloadedmetadata = (e) => {
            video.play()
          }
          vm.video = video
          vm.track = mediaStream.getTracks()[0]
        })
        .catch(err => {
          console.log(err)
        })
    },
    photo () {
      let vm = this
      let dataURL = null
      let img = vm.$refs.img
      let canvas = vm.$refs.canvas
      let context = canvas.getContext('2d')
      let width = 300
      let height = 400
      canvas.width = width
      canvas.height = height
      img.height = height
      context.drawImage(vm.video, 0, 0, width, height)
      dataURL = canvas.toDataURL('image/png')
      img.src = dataURL
      // 记录dataURL，并且改变按钮的状态
      vm.dataURL = dataURL
      vm.isShowImg = true
    },
    resetPhoto () {
      let vm = this
      vm.isShowImg = false
    },
    surePhoto () {
      console.log(this.dataURL)
      this.$Message.success('已保持了图片的:dataURL')
    },
    stopPhoto () {
      this.track.stop()
    }
  },
  destroyed () {
    let vm = this
    vm.stopPhoto()
  }
}
</script>
<style lang="less" scoped>
.photograph_page {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .button_group {
    margin-top:20px;
    .MyButton {
      &:first-child {
        margin-right: 60px;
      }
    }
  }
}
.video_box {
  width: 300px;
  height:400px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 3px 10px #000;
  border: 10px solid #fff;
  background: #fff;
  border-radius: 2px;
  box-sizing: content-box;
  video {
    z-index: 999;
    margin: 0;
  }
  .img {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 9999;
    display: block;
    background: red;
  }
  .border {
    width: 100%;
    height: 100%;
    position: absolute;
    top:0;
    bottom:0;
    left:0;
    right: 0;
    span {
      width: 30px;
      height: 30px;
      position: absolute;
      z-index: 99999;
      transform: translate3d(0, 0, 0);
      animation: flashing 1s linear 1s infinite alternate;
    }
    @border: 2px solid #000;
    @size: 20px;
    .top_left {
      border-top: @border;
      border-left: @border;
      top: @size;
      left: @size;
    }
    .top_right {
      border-top: @border;
      border-right: @border;
      top: @size;
      right: @size;
    }
    .bottom_left {
      border-bottom: @border;
      border-left: @border;
      bottom: @size;
      left: @size;
    }
    .bottom_right {
      border-right: @border;
      border-bottom: @border;
      right: @size;
      bottom: @size;
    }
  }
}
@keyframes flashing {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
