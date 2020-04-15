import Vue from 'vue'
import Router from 'vue-router'
import login from '@/view/login'
import teacher from '@/view/teacher'
import studentmsg from '@/view/studentmsg'
import correct from '@/view/correct'

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
      path: '/smsg:token',
      name: 'studentmsg',
      component: studentmsg
    },
    {
      path: '/teacher',
      name: 'teacher',
      component: teacher
    },
    {
      path: '/correct',
      name: 'correct',
      component: correct
    }

  ]
})
