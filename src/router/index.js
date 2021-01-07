import Vue from 'vue'
import Router from 'vue-router'
import Traker from '@/components/Traker'
import Home from '@/components/Home'
import Entries from '@/components/Entries'
import CreateUser from '@/components/Users/create'
import EditUser from '@/components/Users/edit'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/time-entries',
      name: 'Entries',
      component: Entries
    },
    {
      path: '/time-entries/log-time',
      name: 'Log-time',
      component: Traker
    },
    {
      path: '/create-user',
      name: 'Create-user',
      component: CreateUser
    },
    {
      path: '/edit-user/:id',
      name: 'Edit-user',
      component: EditUser
    }
  ]
})
