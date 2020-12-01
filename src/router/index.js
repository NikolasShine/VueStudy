import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../pages//HelloWorld'
import SettingPage from '../pages/SettingPage'
import HomePage from '../pages/HomePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: { name: 'HomePage' }
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/HomePage',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/SettingPage',
      name: 'SettingPage',
      component: SettingPage
    }
  ]
})
