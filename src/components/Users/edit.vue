<template>
  <el-container style="display: flex; justify-content:center">
    <el-row>
      <el-col :span="24">
        <Form
        title="Edit User"
        :user="userEdit"
        @getNewUser="updateUser"/>
        </el-col>
    </el-row>
  </el-container>
</template>

<script>
import Form from './form'

export default {
  components: {
    Form
  },
  data () {
    return {
      userEdit: {},
      userId: '',
      userTark: ''
    }
  },
  mounted () {
    const users = [...this.$store.state.users]
    const id = this.$route.params.id
    const user = users.filter(user => user.id === id)[0]
    this.userEdit = user.user
    this.userTark = user.tarks
    this.userId = id
  },
  methods: {
    updateUser (user) {
      let template = {
        id: this.userId,
        user: {
          firstName: user.firstName,
          lastName: user.lastName,
          image: user.image
        },
        tarks: this.userTark
      }
      this.$store.dispatch('updateUser', template)
      this.$router.push('/time-entries')
    }
  }

}
</script>

<style>

</style>
