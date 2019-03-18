import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import table from '@/views/iview-ui/table'
import md5passWord from '@/views/other/md5-passWord'
import camera from '@/views/other/camera'
import testApi from '@/views/other/testApi'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/table',
      name: 'table',
      component: table
    },
    {
      path: '/md5-passWord',
      name: 'md5-passWord',
      component: md5passWord
    },
    {
      path: '/camera',
      name: 'camera',
      component: camera
    },
    {
      path: '/testApi',
      name: 'testApi',
      component: testApi
    }
  ]
})
