<template>
  <el-row>
    <el-col :span="24">
      <el-card style="padding: 0px; text-align: center">
        <h2>Total Time</h2>
        <el-divider></el-divider>
        <h2>{{ totalTime }}</h2>

      </el-card>
      <el-card>
        <p
        v-for="(person, no) in personTotalTime"
        :key="no"
        style="display:flex; justify-content: space-between;">
          <span>{{ `${person.firstName} ${person.lastName}` }}</span>
          <span>{{ person.totalTime}}</span>
        </p>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  computed: {
    users () {
      return [...this.$store.state.users] || []
    },
    totalTime () {
      return this.getTotalTime(this.transform(this.users))
    },
    personTotalTime () {
      return this.users.map((user) => {
        return {
          firstName: user.user.firstName,
          lastName: user.user.lastName,
          totalTime: this.getTotalTime(user.tarks)
        }
      })
    }
  },
  methods: {
    transform (list) {
      return list
        .map((user) => {
          return user.tarks.map((tark) => {
            return {
              id: user.id,
              user: {
                firstName: user.user.firstName,
                lastName: user.user.lastName,
                email: user.user.email,
                image: user.user.image
              },
              tarkId: tark.id,
              comment: tark.comment,
              totalTime: tark.totalTime,
              date: tark.date
            }
          })
        })
        .flat()
    },
    getTotalTime (list) {
      let total = 0
      list.map((item) => {
        total = total + item.totalTime
      })
      return total
    }
  }
}
</script>

<style>
</style>
