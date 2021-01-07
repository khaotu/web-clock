<template>
  <el-container style="display: flex; justify-content:center;">
    <el-row>
      <el-col :xs="24">
        <!-- <el-button type="primary"
        @click="$router.push('/traker')">Add log time</el-button> -->
        <el-button type="primary"
        @click="$router.push('/time-entries/log-time')">Add log time</el-button>
        <el-button
        type="success"
        @click="$router.push('/create-user')">New user</el-button>
      </el-col>
      <el-col :xs="24" >
        <Users
        :users="users"/>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
import Users from './user'
export default {
  components: {
    Users
  },
  computed: {
    users () {
      return [...this.$store.state.users] || []
    }
  }
}
</script>

<style>

</style>
