<template>
  <el-container style="display: flex; justify-content:center">
    <el-row>
      <el-col :span="24">
        <Form
        title="Create User"
        @getNewUser="createUser"/>
        </el-col>
    </el-row>
  </el-container>
</template>

<script>
import Form from './form'
import { uid } from 'uid'
export default {
  components: {
    Form
  },
  methods: {
    createUser (user) {
      let template = {
        id: uid(),
        user: {
          firstName: user.firstName,
          lastName: user.lastName,
          image: user.image
        },
        tarks: []
      }
      this.$store.commit('CREATE_USER', template)
      this.$router.push('/time-entries')
    }
  }
}
</script>

<style>

</style>
