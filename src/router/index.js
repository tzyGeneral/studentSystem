import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import studentmsg from '@/components/studentmsg'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/smsg/:token',
      name: 'studentmsg',
      component: studentmsg
    }
  ]
})
