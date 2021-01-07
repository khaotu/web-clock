import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    users: [
      {
        id: 'fsm2vsgo1pr',
        user: {
          firstName: 'Ryan',
          lastName: 'Chenkie',
          image: 'https://1.gravatar.com/avatar/7f4ec37467f2f7db6fffc7b4d2cc8dc2?s=250'
        },
        tarks: [
          {
            id: 'bdd426802c6',
            comment: 'First time entry',
            totalTime: 1.5,
            date: '2016-04-08'
          }
        ]
      }
    ]
  },
  actions: {
    updateTarkByUser ({ state, commit }, item) {
      let updateTark = state.users.map(user => {
        if (user.id === item.userId) {
          user.tarks.push(item.tark)
        }
        return user
      })
      localStorage.setItem('users', JSON.stringify(updateTark))
      commit('UPDARE_USER', updateTark)
    },

    deleteTark ({state, commit}, item) {
      const userId = item.id
      const tarkId = item.tarkId
      let updateTark = state.users.map(user => {
        if (user.id === userId) {
          user.tarks = user.tarks.filter(tark => tark.id !== tarkId)
        }
        return user
      })
      localStorage.setItem('users', JSON.stringify(updateTark))
      commit('UPDARE_USER', updateTark)
    },
    deleteUser ({state, commit}, userId) {
      let updateUser = state.users.filter(user => user.id !== userId)
      localStorage.setItem('users', JSON.stringify(updateUser))
      commit('UPDARE_USER', updateUser)
    },

    updateUser ({state, commit}, item) {
      let updateUser = state.users.map(user => {
        if (user.id === item.id) return item
        else return user
      })
      localStorage.setItem('users', JSON.stringify(updateUser))
      commit('UPDARE_USER', updateUser)
    }
  },
  mutations: {
    CREATE_USER (state, newUser) {
      state.users.push(newUser)
      localStorage.setItem('users', JSON.stringify([...state.users]))
    },
    UPDARE_USER (state, users) {
      state.users = [...users]
    },
    DELETE_USER (state, userId) {
      let updateUsers = state.users.filter(user => user.id !== userId)
      localStorage.setItem('users', JSON.stringify([...updateUsers]))
      state.users = [...updateUsers]
    }
  }
})
