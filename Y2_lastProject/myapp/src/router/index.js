import Vue from 'vue'
import Router from 'vue-router'
import Wisdom from '@/view/content/wisdom/index'
import Education from '@/view/content/education/index'
import Shopping from '@/view/content/shopping/index'
import My from '@/view/content/my/index'

import Login from '@/view/login/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect: 'wisdom'
    },
    {
      path: '/wisdom',
      name: 'Wisdom',
      component: Wisdom
    },
    {
      path: '/education',
      name: 'Education',
      component: Education
    },
    {
      path: '/shopping',
      name: 'Shopping',
      component: Shopping
    },
    {
      path: '/my',
      name: 'My',
      component: My,
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    }
  ],
  mode: "history"
})
