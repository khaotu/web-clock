<template>
  <div id="app">
    <el-menu
      class="el-menu-demo"
      mode="horizontal"
      style="margin-bottom:30px;"
    >
      <el-menu-item index="1">
        <el-button type="text" @click="$router.push('/')"
          >Vue Time Tracker</el-button
        >
      </el-menu-item>
      <el-menu-item index="2" disabled>Home</el-menu-item>
      <el-menu-item index="3">
        <el-button type="text" @click="$router.push('/time-entries')"
          >Time Entries</el-button
        >
      </el-menu-item>
    </el-menu>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    storage () {
      return JSON.parse(localStorage.getItem('users'))
    }
  },
  mounted () {
    if (localStorage.getItem('users') === null) localStorage.setItem('users', JSON.stringify(this.$store.state.users))
    else this.$store.commit('UPDARE_USER', JSON.parse(localStorage.getItem('users')))
  }
}
</script>

<style >
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 50px;
}
</style>
