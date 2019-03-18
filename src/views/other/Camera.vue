<template>
  <div id='cameraUpload'>
    <Form ref='member'
          :label-width='120'
          :model='member'
          :rules='memberRule'
          style='width: 600px'>
      <FormItem label='照片'
                prop='photo'>
        <div v-if="member.photo"
             class="uploadPhoto">
          <img :src="member.photo">
        </div>
        <Button type='ghost'
                long
                style='width: 120px;'
                icon="ios-camera"
                @click="handleCamera">拍摄照片</Button>
      </FormItem>
    </Form>

    <!--拍照-->
    <Modal v-model='modal.visibleCamera'
           title='拍照'
           footer-hide
           width='800'
           :mask-closable='false'>
      <div class="cameraBox">
        <video id="video"
               width="300"
               height="220"></video>
        <canvas id='canvas'
                width='300'
                height='220'
                style="display: none"></canvas>
      </div>
      <div class="iCenter"
           style="margin-top: 20px">
        <Button type='primary'
                long
                size='large'
                @click="takePhone"
                style='width: 200px;'
                :loading="loading.cameraLoading">拍照</Button>
      </div>
    </Modal>
  </div>
</template>
<script>
export default {
  name: 'cameraUpload',
  data () {
    return {
      loading: {
        cameraLoading: false
      },
      modal: {
        visibleCamera: false
      },
      memberInit: {},
      member: {
        photo: ''
      },
      memberRule: {
      },
      canvas: null,
      video: null,
      MediaStreamTrack: null
    }
  },
  mounted () {
    // 摄像头
    this.canvas = document.getElementById('canvas')
    this.video = document.getElementById('video')
  },
  methods: {
    handleCamera () {
      this.modal.visibleCamera = true // 打开摄像头弹层
      let that = this
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true
        }).then(function (stream) {
          that.MediaStreamTrack = typeof stream.stop === 'function' ? stream : stream.getTracks()[1]
          that.video.src = (window.URL).createObjectURL(stream)
          that.video.play()
        }).catch(function (err) {
          console.log(err)
        })
      } else if (navigator.getMedia) {
        navigator.getMedia({
          video: true
        }).then(function (stream) {
          that.MediaStreamTrack = stream.getTracks()[1]
          that.video.src = (window.webkitURL).createObjectURL(stream)
          that.video.play()
        }).catch(function (err) {
          console.log(err)
        })
      }
    },
    takePhone () {
      let that = this
      that.canvas.getContext('2d').drawImage(this.video, 0, 0, 300, 220)

      let dataurl = that.canvas.toDataURL('image/jpeg')
      let blob = that.dataURLtoFile(dataurl, 'camera.jpg') // base64 转图片file
      let formData = new FormData()
      formData.append('file', blob)
      that.xhrPost(formData) // formdata方式上传图片
    },
    xhrPost (formData) {
      console.log('开始上传')
      let that = this
      that.loading.cameraLoading = true
      let xhr = null
      if (window.XMLHttpRequest) {
        xhr = new XMLHttpRequest()
      } else if (window.ActiveXObject) {
        // eslint-disable-next-line no-undef
        xhr = new ActiveXObject('Microsoft.XMLHTTP')
      }
      if (xhr != null) {
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            if (xhr.status === 200) {
              let resData = JSON.parse(xhr.responseText)
              console.log(resData)
              if (resData.code === 200) {
                that.MediaStreamTrack && that.MediaStreamTrack.stop() // 关闭摄像头
                that.member.photo = resData.data.absolutePath
                that.loading.cameraLoading = false
                that.modal.visibleCamera = false
              } else {
                that.loading.cameraLoading = false
                that.$Notice.warning({ title: '提示', desc: resData.msg })
              }
            }
          }
        }
        const user = JSON.parse(localStorage.getItem('userM'))
        xhr.open('post', 'http://192.168.8.45:8201/sys/uploadFile')
        // 请求头不需要可以删除
        xhr.setRequestHeader('Authorization', user.token)
        xhr.setRequestHeader('platform', '1')
        xhr.setRequestHeader('apiVersion', '1')

        xhr.send(formData)
      } else {
        that.$Notice.warning({ title: '提示', desc: '您的浏览器不支持XMLHTTP' })
      }
    },
    dataURLtoFile (dataurl, filename) {
      let arr = dataurl.split(',')
      let mime = arr[0].match(/:(.*?);/)[1]
      let bstr = atob(arr[1])
      let n = bstr.length
      let u8arr = new Uint8Array(n)
      while (n--) {
        u8arr[n] = bstr.charCodeAt(n)
      }
      return new File([u8arr], filename, { type: mime })
    }
  }
}
</script>
<style>
#cameraUpload {
  background: #fff;
  padding: 30px 40px;
}
.uploadPhoto {
  width: 150px;
  height: 110px;
  border: 1px solid #f2f2f2;
  margin-bottom: 5px;
}
.uploadPhoto img {
  width: 100%;
  height: 100%;
}
.cameraBox {
  width: 300px;
  background: #f2f2f2;
  margin: 0 auto;
}
</style>
