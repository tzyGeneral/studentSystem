import Vue from 'vue'
import Router from 'vue-router'
import login from '@/view/login'
import homeworkSet from '@/view/homeworkSet'
import studentmsg from '@/view/studentmsg'
import correct from '@/view/correct'
import teacherIndex from '@/view/teacherIndex'
import classMessage from '@/view/classMessage'

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
      path: '/homeworkSet:token',
      name: 'homeworkSet',
      component: homeworkSet
    },
    {
      path: '/correct',
      name: 'correct',
      component: correct
    },
    {
      path: '/teacher:token',
      name: 'teacherIndex',
      component: teacherIndex
    },
    {
      path: '/classMessage',
      name: 'classMessage',
      component: classMessage
    }

  ]
})
