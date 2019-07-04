import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import table from '@/views/iview-ui/table'
import md5passWord from '@/views/other/md5-passWord'
import camera from '@/views/other/camera'
import testApi from '@/views/other/testApi'
import scrollDemo from '@/views/other/scrollDemo'
import iframe from '@/views/other/iframe'
import testMock from '@/views/other/testMock'
import biaozhu from '@/views/other/biaozhu'

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
    },
    {
      path: '/scrollDemo',
      name: 'scrollDemo',
      component: scrollDemo
    },
    {
      path: '/iframe',
      name: 'iframe',
      component: iframe
    },
    {
      path: '/testMock',
      name: 'testMock',
      component: testMock
    },
    {
      path: '/biaozhu',
      name: 'biaozhu',
      component: biaozhu
    }

  ]
})
