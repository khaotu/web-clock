<template>
  <el-row >
    <el-col :xs="24" style="display: flex; justify-content:center; min-width: 500px;">
      <el-form
      ref="template"
      style="min-width: 300px;"
      label-position="top"
      label-width="800px"
      :model="template">
        <h1>{{ title }}</h1>
        <el-form-item
          label="firstName"
          prop="firstName"
          :rules="[
            { required: true, message: 'Please input firstName', trigger: 'blur' }
          ]"
        >
          <el-input v-model="template.firstName"></el-input>
        </el-form-item>
         <el-form-item label="lastName" prop="lastName"
         :rules="[
            { required: true, message: 'Please input lastName', trigger: 'blur' }
          ]">
           <el-input v-model="template.lastName"/>
        </el-form-item>
         <el-form-item label="image" >
          <el-upload
          class="avatar-uploader"
          style="display: flex; justify-content:center;"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload">
          <img v-if="template.imageUrl" :src="template.imageUrl" class="avatar" >
          <i v-else class="el-icon-plus avatar-uploader-icon" style="border: 1px dashed #919090;
            border-radius: 6px;
            cursor: pointer;
            position: relative;
            overflow: hidden;"/>
        </el-upload>
        </el-form-item>
        <el-form-item style="display: flex; justify-content:center;">
          <el-button type="primary" @click="save">Save</el-button>
          <el-button type="danger" @click="$router.push('/time-entries')">Cancel</el-button>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    user: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      template: {
        firstName: '',
        lastName: '',
        image: ''
      }
    }
  },
  watch: {
    user (value) {
      if (value) {
        this.template.firstName = value.firstName ? value.firstName : ''
        this.template.lastName = value.lastName ? value.lastName : ''
        this.template.image = value.image ? value.image : ''
      }
    }
  },
  computed: {
    users () {
      return [...this.$store.state.users]
    }
  },
  methods: {
    save () {
      this.$refs.template.validate((valid) => {
        if (valid) {
          alert('submit!')
          this.$emit('getNewUser', this.template)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    handleAvatarSuccess (res, file) {
      this.template.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isJPG) {
        this.$message.error('Avatar picture must be JPG format!')
      }
      if (!isLt2M) {
        this.$message.error('Avatar picture size can not exceed 2MB!')
      }
      return isJPG && isLt2M
    }
  }
}
</script>

<style scoped>
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
