<template>
  <el-row>
    <el-col :span="24" >
      <el-card v-for="(timeEntry, number) in users" :key="number">
      <el-row :gutter="24">
        <el-col :span="6" style="text-align: center">
          <el-avatar :size="80" :src="timeEntry.user.image"></el-avatar>
          <!-- <p style="margin-bottom: 0px">{{ timeEntry.user.firstName }}</p>
          <p style="margin-top: 0px">{{ timeEntry.user.lastName }}</p> -->
        </el-col>
        <!-- <el-divider direction="vertical"></el-divider> -->
        <el-col :span="12" style="padding:0 20px;">
          <h2>{{ `${timeEntry.user.firstName} ${timeEntry.user.lastName}` }}</h2>
          <p><i class="el-icon-time"></i>Total {{ timeEntry.totalTime }} hours</p>
          <!-- <p style="margin-bottom: 5px">hours</p> -->
          <!-- <el-tag effect="dark">
            <i class="el-icon-date"></i>
            {{ timeEntry.date }}
          </el-tag> -->
        </el-col>
        <!-- <el-col :span="10">
          <p>{{ timeEntry.comment }}</p>
        </el-col> -->
        <el-col :span="6">
          <el-button
            @click="$router.push(`/edit-user/${timeEntry.id}`)"
            type="warning"
            icon="el-icon-edit"
            size="mini"
          ></el-button>
          <el-button
            @click="deleteUser(timeEntry.id)"
            type="danger"
            icon="el-icon-delete"
            size="mini"
          ></el-button>
        </el-col>
      </el-row>
    </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    deleteUser (userId) {
      this.$store.dispatch('deleteUser', userId)
    }
  }

}
</script>

<style>

</style>
