<template>
  <el-container style="display:flex; justify-content:center;">
    <el-row>
      <el-col :span="24">
        <el-card>
      <el-row>
        <el-col :span="24" class="main-title"> <h1>Vue Time Traker</h1> </el-col>
        <el-col :span="24" class="Title --text">Get started by
          <el-link type="primary" @click="$router.push('/time-entries')">creating a time entries</el-link>
          .</el-col>
      </el-row>
    </el-card>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
export default {}
</script>

<style>
</style>
