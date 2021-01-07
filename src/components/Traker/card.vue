<template>
  <div>
    <el-card v-for="(timeEntry, number) in timeEntries" :key="number">
      <el-row :gutter="24">
        <el-col :span="6" style="text-align: center">
          <el-avatar :size="80" :src="timeEntry.user.image"></el-avatar>
          <p style="margin-bottom: 0px">{{ timeEntry.user.firstName }}</p>
          <p style="margin-top: 0px">{{ timeEntry.user.lastName }}</p>
        </el-col>

        <el-col :span="5" style="text-align: center">
          <p><i class="el-icon-time"></i>{{ timeEntry.totalTime }}</p>
          <p style="margin-bottom: 5px">hours</p>
          <el-tag effect="dark">
            <i class="el-icon-date"></i>
            {{ timeEntry.date }}
          </el-tag>
        </el-col>
        <el-col :span="10">
          <p>{{ timeEntry.comment }}</p>
        </el-col>
        <el-col :span="3">
          <el-button
            @click="deleteTimeEntry(timeEntry)"
            type="danger"
            icon="el-icon-close"
            size="mini"
          ></el-button>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  computed: {
    timeEntries () {
      let users = [...this.$store.state.users]
      let template = this.transform(users)
      return this.sortByDate(template)
    },
    users () {
      return [...this.$store.state.users]
    }
  },
  methods: {
    deleteTimeEntry (timeEntry) {
      this.$store.dispatch('deleteTark', timeEntry)
    },

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

    sortByDate (logtime) {
      return logtime.sort((first, second) => {
        var firstDate = new Date(first.date)
        var secondDate = new Date(second.date)
        return secondDate - firstDate
      })
    }
  }
}
</script>

<style>
.avatar {
  height: 75px;
  margin: 0 auto;
  margin-top: 10px;
  margin-bottom: 10px;
}
.user-details {
  background-color: #f5f5f5;
  border-right: 1px solid #ddd;
  margin: -10px 0;
}
.time-block {
  padding: 10px;
}
.comment-section {
  padding: 20px;
}
</style>

<style>
</style>
