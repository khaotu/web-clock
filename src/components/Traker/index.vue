<template>
  <el-container>
    <el-row :gutter="24">
      <el-col :xs="24" :sm="8">
        <TotalTime />
      </el-col>

      <el-col :xs="24" :sm="14">
        <h2>Loger</h2>
        <Form style="margin-bottom:20px"/>
        <el-divider></el-divider>
        <Card />
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
import Form from './form'
import Card from './card'
import TotalTime from './totalTime'
export default {
  components: {
    Form,
    Card,
    TotalTime
  }
}
</script>

<style>
</style>
