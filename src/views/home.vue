<template>
  <div>
    <h1>Home</h1>
<el-button @click="logout">Logout</el-button>
<br><br>
<el-upload ref="imagen"
  class="avatar-uploader"
  action=""
  :show-file-list="false"
  :on-success="handleAvatarSuccess"
  :on-change="upload"
  :before-upload="beforeAvatarUpload">
  <img v-if="imageUrl" :src="imageUrl" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>


  </div>
</template>
<script>
import auth from '../assets/auth'
// import storage from 'firebase/storage'
import firebase from 'firebase'
export default {
  name: 'home',
  data () {
    return {
      imageUrl: '',
      ref: ''
    }
  },
  methods: {
    logout () {
      auth.logout()
    },
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      console.log(file)
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('La imagen debe estar en formato JPG!')
      }
      if (!isLt2M) {
        this.$message.error('La imagen excede los 2MB!')
      }
      return isJPG && isLt2M
    },
    upload (file, fileList) {
      console.log(file)
      const ref = firebase.storage().ref()
      var result = ref.child(file.name).put(file.raw)
      console.log(result)
      this.$ref.imagen.handleAvatarSuccess(file)
    }
  },
  mounted () {
    console.log(firebase.storage().ref())
  }
}
</script>
<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>

