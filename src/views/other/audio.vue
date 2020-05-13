
  <!-- 详情请参考 https://github.com/2fps/recorder -->
<template>
  <div class="wrap">
    <div @click="handleClick">点我录音</div>
    <div @click="stopClick">点我停止</div>
    <div class="audioData" @click="palyAudio">{{recorderTime}}</div>
    <div @click="stopPlay">点我停止播放</div>
  </div>
</template>
<script>

export default {
  data () {
    return {
      recorder: {},
      recorderTime: 0
    }
  },
  methods: {
    handleClick () {
      this.recorder.start()
    },
    stopClick () {
      this.recorder.stop()
      console.log(this.recorder.duration)
      this.recorderTime = Math.ceil(this.recorder.duration)
    },
    palyAudio () {
      this.recorder.play()
    },
    stopPlay () {
      this.recorder.stopPlay()
    }
  },
  mounted () {
    // eslint-disable-next-line no-undef
    this.recorder = new Recorder({
      sampleBits: 16, // 采样位数，支持 8 或 16，默认是16
      sampleRate: 16000, // 采样率，支持 11025、16000、22050、24000、44100、48000，根据浏览器默认值，我的chrome是48000
      numChannels: 1, // 声道，支持 1 或 2， 默认是1
      compiling: true // 是否边录边转换，默认是false
    })
    this.recorder.onstopplay = () => {
      console.log('onstopplay')
    }
  }
}
</script>

<style scoped>
.audioData {
  width: 400px;
  height: 40px;
  background-color: skyblue;
  border-radius: 20px;
  line-height: 40px;
  padding-left: 20px;
  font-size: 18px;
}
</style>
