<template>
  <el-row>
    <el-col :span="24">
      <el-form
        ref="validateForm"
        label-position="top"
        label-width="100px"
        :model="template"
        :rules="rules"
      >
        <el-form-item label="User" prop="user">
          {{ user }}
          <el-select
            v-model="user"
            placeholder="Select"
            size="large"
            style="min-width: 500px"
          >
            <el-option
              v-for="user in users"
              :key="user.user.id"
              :label="`${user.user.firstName} ${user.user.lastName}`"
              :value="user"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="Date" prop="date">
          <el-date-picker
            v-model="template.date"
            type="date"
            placeholder="Pick a day"
            style="min-width: 500px"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="Hours" prop="hours">
          <el-input-number
            v-model="template.hours"
            controls-position="right"
            :min="1"
            :max="100"
          ></el-input-number>
        </el-form-item>
        <el-form-item label="Comment" prop="comment">
          <el-input v-model="template.comment" placeholder="comment here" />
        </el-form-item>
      </el-form>
    </el-col>
    <el-col>
      <el-button type="primary" @click="save">Save</el-button>
      <el-button type="danger" @click="cancelTark">Cancel</el-button>
    </el-col>
  </el-row>
</template>

<script>
import { uid } from 'uid'
export default {
  data () {
    return {
      template: {
        userId: '',
        user: {},
        date: '',
        hours: '',
        comment: ''
      },
      rules: {
        user: [
          { required: true, message: 'Please select user', trigger: 'change' }
        ],
        date: [
          {
            type: 'date',
            required: true,
            message: 'Please pick a date',
            trigger: 'change'
          }
        ],
        hours: [
          { required: true, message: 'Please pick hours', trigger: 'blur' }
        ],
        comment: [
          { required: true, message: 'Please input comment', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    users () {
      return [...this.$store.state.users]
    },
    user: {
      get () {
        if (Object.keys(this.template.user).length !== 0) {
          return `${this.template.user.firstName} ${this.template.user.lastName}`
        } else return ''
      },
      set (value) {
        this.template.user = { ...value.user }
        this.template.userId = value.id
      }
    }
  },
  methods: {
    save () {
      this.$refs.validateForm.validate((valid) => {
        if (valid) {
          let tark = {
            id: uid(),
            comment: this.template.comment,
            totalTime: this.template.hours,
            date: this.template.date.toISOString().slice(0, 10)
          }
          this.$store.dispatch('updateTarkByUser', {
            userId: this.template.userId,
            tark: tark
          })
          alert('submit!')
          this.cancelTark()
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    cancelTark () {
      this.$refs.validateForm.resetFields()
    }
  }
}
</script>

<style>
</style>
